/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'books.google.com'
          },
          {
            protocol: 'http',
            hostname: 'placehold.co'
          },
        ],
      },
};

export default nextConfig;
