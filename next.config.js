// import type { NextConfig } from "next";

const nextConfig = {
  // webpack: (
  //   config,
  //   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  // ) => {
  //   if (config.cache && !dev) {
  //     config.cache = Object.freeze({
  //       type: 'memory',
  //     })
  //   }
  //   if (dev) {
  //     config.devtool = false;
  //   }
  //   // Important: return the modified config
  //   return config
  // },

  experimental: {
    preloadEntriesOnStart: false,
    webpackMemoryOptimizations: true,
  },

  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'placehold.co',
          port: '',
          pathname: '/**',
          // search: {},
      },
    ],
  },
};

export default nextConfig;
