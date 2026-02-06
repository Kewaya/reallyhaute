/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable strict mode for better development experience
    reactStrictMode: true,

    // Static export for GitHub Pages
    output: 'export',

    // Disable image optimization for static export
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
