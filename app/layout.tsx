import type { Metadata, Viewport } from "next";
import ClientLayout from "./ClientLayout";
import { geist, heydari, yekan } from "@/lib/fonts";
import { Toaster } from 'react-hot-toast';

import "./globals.css";

import type { ReactNode } from "react";



const APP_NAME = "Digikala";
const APP_DEFAULT_TITLE = 'فروشگاه اینترنتی دیجی‌کالا';
const APP_TITLE_TEMPLATE = '%s | فروشگاه اینترنتی دیجی‌کالا';
const APP_DESCRIPTION = "این یک نسخه شبیه سازی شده از وبسایت digikala.com است که تنها با ..هدف «غیر تجاری» و برای نمایش مهارت های توسعه وبسایت ساخته شده است.";



export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    template: APP_TITLE_TEMPLATE,
    default: APP_DEFAULT_TITLE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="fa-IR"
      dir="rtl"
      className={`${yekan.className} ${yekan.variable} ${heydari.variable} ${geist.variable} antialiased`}
    >
      <body> 
        <ClientLayout
          loginModalSlot={modal}  // My modal-slot for 'Parallel Routes' -> /login, /signup, ...
        >
          {
            children
          }
        </ClientLayout>

        <Toaster
            containerStyle={{
            zIndex: '99999999999999',
            }}
            toastOptions={{
            className: 'p-8 bg-dark-1',
            style: {
              zIndex: '99999999999999',
              background: '#000000',
              color: '#eeeeee',
              padding: '16px',
              userSelect: 'none',
            },
            position: 'bottom-center',
            }}
        />
      </body>
    </html>
  );
}
