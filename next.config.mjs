/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  images: {
    remotePatterns: [
      { hostname: "example.com" },
      { hostname: "anotherdomain.com" },
    ],
  },
};

export default nextConfig;
