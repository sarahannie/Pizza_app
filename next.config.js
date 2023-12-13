/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', "www.freepnglogos.com",  "images.pexels.com","res.cloudinary.com" ],
      },
      async rewrites() {
        return [
          {
            source: "/api/user/product",
            destination:  process.env.DOMAIN ||"http://localhost:3000/api/user/product",
          },
        ];
      }
}

module.exports = nextConfig
