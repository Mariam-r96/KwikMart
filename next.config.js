const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/:slug',
        destination: '/category/:slug',
        permanent: true
      },
      {
        source: '/search/:path*',
        has: [
          {
            type: 'query',
            key: 'q',
            value: 'home',
          },
        ],
        permanent: false,
        destination: '/search/:path*',
      },
    ]
  },
})
