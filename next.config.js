/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: function () {
        return {
            '/': { page: '/wallet' }
        }
    }
}

module.exports = nextConfig
