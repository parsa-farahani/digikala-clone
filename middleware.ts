import { NextRequest, NextResponse } from "next/server";


export async function middleware(request: NextRequest) {

   const cookie = request.cookies.get('digicommerce_appwrite_session');

   
   const pathname = request.nextUrl.pathname;
   console.log('🐸 Redirect from: ', pathname);


   if (pathname.startsWith('/profile') && !cookie) {
      return NextResponse.redirect(
         new URL(
            `/login${`?redirect=${pathname}`}`,
            request.url
         )
      )
   }
   
   if (
      (pathname.startsWith('/login') ||
         pathname.startsWith('/signup')) &&
         cookie
   ) {
      return NextResponse.redirect(
         new URL(
            `/profile`,
            request.url
         )
      )
   }

   return NextResponse.next();
}


export const config = {
   // auth-private routes
   matcher: [ 
      '/profile/:path*',
      '/login/:path*',
      '/signup/:path*',
   ],
};