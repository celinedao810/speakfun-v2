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
            value: 'admin.localhost',
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

export default nextConfig
