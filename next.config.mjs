/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default withContentlayer(nextConfig);
