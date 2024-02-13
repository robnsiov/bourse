/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unikade.ir",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
