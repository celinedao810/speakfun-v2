import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: process.env.ADMIN_HOST || 'admin.localhost',
          },
        ],
        destination: '/admin/:path*',
      },
      {
        source: '/:path*',
        destination: '/main/:path*',
      },
    ]
  },
}

const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts')

export default withNextIntl(nextConfig)
