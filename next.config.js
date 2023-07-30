/** @type {import('next').NextConfig} */

isDev = process.env.NEXT_PUBLIC_ENV === 'dev' ? true : false

const nextConfig = {
    output: "export",
    basePath: "/nextjs-github-pages",
    images: {
        unoptimized: false,
    },
}

module.exports = isDev ? {} : nextConfig
