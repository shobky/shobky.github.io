/** @type {import('next').NextConfig} */

isDev = process.env.NEXT_PUBLIC_ENV === "dev" ? true : false;

const nextConfig = {
  // output: "export",
  basePath: "/shobky.github.io",
  images: {
    unoptimized: false,
    domains: ["opengraph.githubassets.com"],
  },
};

const devConfig = {
  images: {
    domains: ["opengraph.githubassets.com"],
  },
};

module.exports = isDev ? devConfig : nextConfig;
