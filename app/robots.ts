import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/metadata'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Private or per-user areas; they also send noindex, this just saves crawl budget
      disallow: ['/api/', '/admin', '/dashboard', '/messages', '/notifications', '/settings', '/my', '/auth/', '/profile/products', '/profile/learning'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
