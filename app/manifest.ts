import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
   return {
      name: 'Digikala Clone',
      short_name: 'Digikala',
      description: 'این یک نسخه شبیه سازی شده از وبسایت digikala.com است که تنها با ..هدف «غیر تجاری» و برای نمایش مهارت های توسعه وبسایت ساخته شده است.',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      icons: [
         {
         src: '/logo-192.png',
         sizes: '192x192',
         type: 'image/png',
         },
         {
         src: '/logo-512.png',
         sizes: '512x512',
         type: 'image/png',
         },
      ],
   }
}