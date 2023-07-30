/** @type {import('next').NextConfig} */

environment = process.env.NEXT_PUBLIC_ENV

const nextConfig = {
    output: "export",
    basePath: "/nextjs-github-pages",
    images: {
        unoptimized: false,
    },
}

module.exports = {}
