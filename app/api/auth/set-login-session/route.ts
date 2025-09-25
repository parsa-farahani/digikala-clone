import { cookies } from "next/headers";

export async function POST(req: Request) {
 
   const { sessionId } = await req.json();

   const cookieStore = await cookies();

   cookieStore.set(
      {
         name: 'digicommerce_appwrite_session',
         value: sessionId,
         httpOnly: true,
         path: '/',
         sameSite: 'lax',
         secure: process.env.NODE_ENV === 'production',
      }
   )

   return new Response(
      JSON.stringify(
         {
            success: true,
         }
      ),
      {
         status: 200,
      }
   )
}