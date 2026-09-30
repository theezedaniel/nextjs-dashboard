import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // eslint: {
  //   // ⚠️ This tells Next.js to ignore ESLint crashes during pnpm run build
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
