/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  async rewrites() {
    return [
      {
        source: "/api/chat/:path*",
        destination: "http://127.0.0.1:8000/api/chat/:path*",
      },
      {
        source: "/api/conversations/:path*",
        destination: "http://127.0.0.1:8000/api/conversations/:path*",
      },
      {
        source: "/api/messages/:path*",
        destination: "http://127.0.0.1:8000/api/messages/:path*",
      },
      {
        source: "/api/upload/:path*",
        destination: "http://127.0.0.1:8000/api/upload/:path*",
      },
      {
        source: "/api/export/:path*",
        destination: "http://127.0.0.1:8000/api/export/:path*",
      },
      {
        source: "/api/knowledge/:path*",
        destination: "http://127.0.0.1:8000/api/knowledge/:path*",
      },
      {
        source: "/api/health",
        destination: "http://127.0.0.1:8000/api/health",
      },
    ];
  },
};

module.exports = nextConfig;
