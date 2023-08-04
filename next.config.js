/** @type {import('next').NextConfig} */

isDev = process.env.NEXT_PUBLIC_ENV === "dev" ? true : false;

const nextConfig = {
  output: isDev ? "export" : "",
  assetPrefix: isDev ? "" : "/shobky.github.io",
  basePath: isDev ? "" : "/shobky.github.io",
  images: {
    unoptimized: !isDev && false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
        port: "",
        pathname: "/*/shobky/**",
      },
    ],
  },
};

module.exports = nextConfig;
