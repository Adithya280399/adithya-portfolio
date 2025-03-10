/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/adithya-portfolio",
    images: {
        unoptimized: true,  // Needed for static export if using Next.js images
  },
};
export default nextConfig;
