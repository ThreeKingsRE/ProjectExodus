import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

export default NextAuth(authConfig).auth

// Configure which routes the proxy (formerly middleware) runs on
export const config = {
  matcher: [
    '/admin/:path*',      // Protect all admin routes
    '/auth/:path*',       // Handle auth route redirects
    '/profile/:path*',    // Protect user profile routes
    '/my/:path*',         // Protect user dashboards (analytics, volition)
    '/messages/:path*',   // Protect private messages
    '/settings',          // Protect user settings
    '/notifications',     // Protect user notifications
    '/dashboard',         // Protect user dashboard
    '/articles/write',    // Protect article creation
    '/events/create',     // Protect event creation
    '/community/:path*', // Public tab landings; member-only pages below them
    '/fishbowl/:path*',   // Public Fish Tank landing; private personal tank
    '/api/projects/:path*', // Protect underlying community data as well as pages
    '/api/social/:path*',
    '/api/users/:path*',
    '/api/network/:path*',
    '/api/fishbowl/:path*',
    '/api/forum/:path*',
    '/network/:path*',    // Protect social networking features
  ],
}
