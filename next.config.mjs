/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.elmohands-eeib.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5665",
      },
    ],
  },
};

export default nextConfig;
