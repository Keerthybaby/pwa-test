/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa'

const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    removeConsole: !isDev,
  },
}

export default withPWA({
  dest: 'public',
  disable: isDev,
  register: true,
  skipWaiting: true,
})(nextConfig)
