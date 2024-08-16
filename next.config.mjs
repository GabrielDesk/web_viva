/** @type {import('next').NextConfig} */
// const { i18n } = require("./next-i18next.config");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  // i18n,
};

export default nextConfig;
