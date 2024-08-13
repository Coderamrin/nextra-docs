// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import nextra from "nextra";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  distDir: "./.next", // Nextra supports custom `nextConfig.distDir`
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
    // once this makes it into a release: https://github.com/vercel/next.js/pull/51755
    //   serverActions: true,
    //   serverActionsBodySizeLimit: '5mb',
  },
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
