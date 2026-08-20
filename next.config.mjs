/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st4.depositphotos.com",
      },
      {
        protocol: "https",
        hostname: "**", // Allows any external domain for user-uploaded cover/profile pics
      },
    ],
  },
};

export default nextConfig;
