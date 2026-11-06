import type * as Party from "partykit/server";
import { onConnect, type YPartyKitOptions } from "y-partykit";
import { verifyCollabToken, type CollabTokenClaims } from "../lib/collab-token";

// Document collaboration server using Y.js + PartyKit.
// Each document gets its own "party" (isolated Durable Object).
//
// Auth: every WebSocket must carry a short-lived token issued by the Next.js
// app at /api/documents/[id]/collab-token, signed with PARTYKIT_SECRET (set it
// in both Vercel and PartyKit: `npx partykit env add PARTYKIT_SECRET`).
// Tokens are verified at the edge in onBeforeConnect, before the room is
// touched; the verified claims are forwarded to onConnect in a header.

const CLAIMS_HEADER = "x-exodus-collab-claims";

function getSecret(env: Record<string, unknown>): string | null {
  const secret = env.PARTYKIT_SECRET;
  return typeof secret === "string" && secret.length > 0 ? secret : null;
}

export default class DocumentParty implements Party.Server {
  constructor(readonly room: Party.Room) {}

  // Y.js configuration
  readonly yjsOptions: YPartyKitOptions = {
    // Persist Y.js document state to PartyKit's built-in storage
    persist: {
      mode: "snapshot",
    },
    callback: {
      handler: async () => {
        // Runs whenever the document changes
        const [type, documentId] = this.room.id.split(":");

        if (type === "document" && documentId) {
          await this.room.storage.put("lastUpdated", Date.now());
          await this.room.storage.put("documentId", documentId);
        }
      },
    },
  };

  /**
   * Runs at the edge before a WebSocket reaches the room. Rejects anything
   * without a valid token for this exact room.
   */
  static async onBeforeConnect(req: Party.Request, lobby: Party.Lobby) {
    const secret = getSecret(lobby.env);
    if (!secret) {
      console.error("PARTYKIT_SECRET is not configured; refusing connection");
      return new Response("Collaboration server not configured", { status: 503 });
    }

    const token = new URL(req.url).searchParams.get("token");
    if (!token) {
      return new Response("Unauthorized", { status: 401 });
    }

    const claims = await verifyCollabToken(token, secret, lobby.id);
    if (!claims) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Overwrite (never trust) any client-supplied value for this header
    const headers = new Headers(req.headers as unknown as HeadersInit);
    headers.set(CLAIMS_HEADER, JSON.stringify(claims));
    return new Request(req.url, { method: req.method, headers }) as unknown as Party.Request;
  }

  async onConnect(conn: Party.Connection, ctx: Party.ConnectionContext) {
    let claims: CollabTokenClaims | null = null;
    try {
      const raw = ctx.request.headers.get(CLAIMS_HEADER);
      claims = raw ? (JSON.parse(raw) as CollabTokenClaims) : null;
    } catch {
      claims = null;
    }

    // Defense in depth: onBeforeConnect should already have rejected these
    if (!claims || claims.room !== this.room.id) {
      conn.close(4001, "Unauthorized");
      return;
    }

    conn.setState({
      user: {
        id: claims.sub,
        name: claims.name,
        color: this.generateColor(claims.sub),
      },
    });

    // Viewers get a read-only socket: they receive updates but their writes
    // are dropped by y-partykit.
    return onConnect(conn, this.room, {
      ...this.yjsOptions,
      readOnly: !claims.canEdit,
    });
  }

  // HTTP endpoints. /health is public; everything else needs the server secret.
  async onRequest(req: Party.Request) {
    const url = new URL(req.url);

    if (url.pathname.endsWith("/health")) {
      return Response.json({ status: "ok" });
    }

    const secret = getSecret(this.room.env);
    const authHeader = req.headers.get("authorization") || "";
    if (!secret || authHeader !== `Bearer ${secret}`) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Get document state (for syncing to main DB)
    if (req.method === "GET" && url.pathname.endsWith("/state")) {
      const lastUpdated = await this.room.storage.get("lastUpdated");
      const documentId = await this.room.storage.get("documentId");

      return Response.json({
        documentId,
        lastUpdated,
        connections: [...this.room.getConnections()].length,
      });
    }

    // Persist to main database (called by a cron or webhook)
    if (req.method === "POST" && url.pathname.endsWith("/persist")) {
      const documentId = await this.room.storage.get("documentId");

      // Here you would call your main API to persist
      return Response.json({
        success: true,
        documentId,
        message: "Persistence triggered",
      });
    }

    return new Response("Not found", { status: 404 });
  }

  // Generate consistent color for user
  generateColor(userId: string): string {
    const colors = [
      "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8",
      "#F7DC6F", "#BB8FCE", "#85C1E2", "#F8B88B", "#82E0AA",
    ];
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
      hash = userId.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }
}

DocumentParty satisfies Party.Worker;
