import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';


export const yekan = localFont({
   src: '../public/fonts/Yekan/Yekan.ttf',
   variable: '--font-yekan',
   display: 'swap',
})


export const heydari = localFont({
   src: '../public/fonts/Heydari/Heydari.ttf',
   variable: '--font-heydari',
   display: 'swap',
})


export const geist = Roboto({
   variable: '--font-geist',
   weight: ['100', '500', '700', '900'],
   subsets: ['latin'],
   display: 'swap',
})