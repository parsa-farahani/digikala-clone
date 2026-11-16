// import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";


const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",     // your TS source
  swDest: "public/sw.js", // output compiled JS here
});


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

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ]
  },

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

  eslint: {
    ignoreDuringBuilds: true, // skips all ESLint errors at build time
  },
};

export default withSerwist(nextConfig);
