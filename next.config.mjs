/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

import rehypeHighlight from "rehype-highlight";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
