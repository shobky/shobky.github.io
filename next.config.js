/** @type {import('next').NextConfig} */

//needs conditional config for github action 
//vercel build fails 
//for develobment mode comment everything in nextConfig object for now

const nextConfig = {
    //
    output: "export",
    basePath: "/nextjs-github-pages",
    images: {
        unoptimized: false,
    },
    //
}

module.exports = nextConfig
