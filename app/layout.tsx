import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import { geist, heydari, yekan } from "@/lib/fonts";
import { Toaster } from 'react-hot-toast';

import "./globals.css";




export const metadata: Metadata = {
  title: {
    template: '%s | فروشگاه اینترنتی دیجی‌کالا',
    default: 'فروشگاه اینترنتی دیجی‌کالا',
  },
  description: "این یک نسخه شبیه سازی شده از وبسایت digikala.com است که تنها با ..هدف «غیر تجاری» و برای نمایش مهارت های توسعه وبسایت ساخته شده است.",
  robots: {
    index: false,
    follow: false,
  },
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
