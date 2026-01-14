import { fileURLToPath } from 'url'
import path from 'path'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH
const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure base path and asset prefix for production build
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },

  // Image optimization off for compatibility
  images: {
    unoptimized: true,
  },

  // React Strict Mode (safe to keep true)
  reactStrictMode: true,

  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion': path.resolve(__dirname, 'node_modules/@emotion'),
      '@mui': path.resolve(__dirname, 'node_modules/@mui'),
      '@tabler/icons-react': path.resolve(__dirname, 'node_modules/@tabler/icons-react'),
      i18next: path.resolve(__dirname, 'node_modules/i18next'),
      'next-auth': path.resolve(__dirname, 'node_modules/next-auth'),
      'react-hook-form': path.resolve(__dirname, 'node_modules/react-hook-form'),
      'react-i18next': path.resolve(__dirname, 'node_modules/react-i18next'),
    };

    return config;
  },

  // ✅ Add ESLint ignore here (instead of overwriting exports)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
