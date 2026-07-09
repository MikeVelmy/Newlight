/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Newlight', //
  // Emits routes as path/index.html instead of path.html, so static hosts
  // that don't rewrite extensionless URLs to .html (GitHub Pages, S3, plain
  // file servers) still resolve clean links like /services via directory
  // index resolution.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;