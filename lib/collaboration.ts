/**
 * Collaboration Configuration
 *
 * This file configures the real-time collaboration infrastructure using Y.js on a Cloudflare Worker (cloudflare/worker.ts).
 *
 * The Worker runs on Cloudflare's edge network (Durable Objects) for:
 * - Global low-latency connections
 * - Automatic scaling (each document = isolated "party")
 * - Built-in persistence
 *
 * DEPLOYMENT:
 * 1. Run `npm run party:deploy` to deploy the Worker
 * 2. Set NEXT_PUBLIC_PARTYKIT_HOST in .env to your Worker address (no https://)
 *
 * DEVELOPMENT:
 * Run `npm run party:dev` to start the local server (127.0.0.1:8787)
 */

// PartyKit project name (must match partykit.json)
const PARTYKIT_PROJECT = "exodus-collab";

export const collaborationConfig = {
  // PartyKit host URL
  // Development: 127.0.0.1:8787
  // Production: exodus-collab.your-subdomain.workers.dev
  host:
    process.env.NEXT_PUBLIC_PARTYKIT_HOST ||
    (process.env.NODE_ENV === "development" ? "127.0.0.1:8787" : null),

  // Project name for PartyKit
  project: PARTYKIT_PROJECT,

  // Protocol (ws for dev, wss for production)
  get protocol() {
    if (typeof window === "undefined") return "wss";
    return window.location.protocol === "https:" ? "wss" : "ws";
  },

  // Full WebSocket URL builder
  // (rooms live at /parties/document/<room> on the Cloudflare server)
  getConnectionUrl(roomId: string, token?: string) {
    const host = this.host;
    if (!host) {
      console.warn("PartyKit host not configured");
      return null;
    }

    const protocol = this.protocol;
    let url = `${protocol}://${host}/parties/document/${roomId}`;

    if (token) {
      url += `?token=${encodeURIComponent(token)}`;
    }

    return url;
  },

  // Check if collaboration is available
  get isAvailable() {
    return !!this.host;
  },

  // Reconnection settings
  maxAttempts: 10,
  delay: 1000,
  factor: 2,
  maxDelay: 30000,

  // Awareness settings (for cursor tracking)
  awarenessSettings: {
    timeout: 30000,
  },
};

/**
 * Get room name for collaboration
 * Format: document:{documentId} or mindmap:{mindmapId}
 */
export function getDocumentName(
  type: "document" | "mindmap",
  id: string
): string {
  return `${type}:${id}`;
}

/**
 * Get user info for awareness (cursor display)
 */
export function getUserAwarenessInfo(user: {
  id: string;
  name: string | null;
  image?: string | null;
}) {
  return {
    user: {
      id: user.id,
      name: user.name || "Anonymous",
      image: user.image,
      color: generateUserColor(user.id),
    },
  };
}

/**
 * Generate a consistent color for each user based on their ID
 */
function generateUserColor(userId: string): string {
  const colors = [
    "#FF6B6B", // Red
    "#4ECDC4", // Teal
    "#45B7D1", // Blue
    "#FFA07A", // Orange
    "#98D8C8", // Mint
    "#F7DC6F", // Yellow
    "#BB8FCE", // Purple
    "#85C1E2", // Sky Blue
    "#F8B88B", // Peach
    "#82E0AA", // Green
  ];

  // Generate a consistent index from user ID
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = userId.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;

  return colors[index];
}

/**
 * Create a PartyKit-compatible Y.js provider
 * This is used by the CollaborativeEditor component
 */
export async function createPartyKitProvider(
  roomId: string,
  ydoc: any,
  options?: {
    token?: string;
    onConnect?: () => void;
    onDisconnect?: () => void;
    onSynced?: () => void;
  }
) {
  // Dynamically import the provider to avoid SSR issues
  let YProvider: any;
  try {
    const mod = await import("y-partyserver/provider");
    YProvider = mod.default;
  } catch (e) {
    throw new Error("y-partyserver not installed. Run: npm install y-partyserver");
  }

  const host = collaborationConfig.host;
  if (!host) {
    throw new Error("Collaboration host not configured");
  }

  const provider = new YProvider(host, roomId, ydoc, {
    party: "document",
    connect: true,
    params: options?.token ? { token: options.token } : undefined,
  });

  // Set up event handlers
  if (options?.onConnect) {
    provider.on("status", ({ status }: { status: string }) => {
      if (status === "connected") options.onConnect?.();
    });
  }

  if (options?.onDisconnect) {
    provider.on("status", ({ status }: { status: string }) => {
      if (status === "disconnected") options.onDisconnect?.();
    });
  }

  if (options?.onSynced) {
    provider.on("synced", () => options.onSynced?.());
  }

  return provider;
}
