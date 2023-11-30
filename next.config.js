/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', "www.freepnglogos.com",  "images.pexels.com" ],
      },
      async rewrites() {
        return [
          {
            source: "/api/todos",
            destination: "http://localhost:3000/api/todos",
          },
        ];
      }
}

module.exports = nextConfig
