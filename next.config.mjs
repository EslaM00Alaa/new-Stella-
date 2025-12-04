/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/EslaM00Alaa/new-Stella-/main/public/**",
      },
    ],
  },
};

export default nextConfig;
