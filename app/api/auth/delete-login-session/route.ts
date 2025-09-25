import { cookies } from "next/headers";

export async function POST(req: Request) {

   console.log('delete cookie');

   const cookieStore = await cookies();

   cookieStore.delete(
      'digicommerce_appwrite_session'
   );

   return new Response(
      null,
      {
         status: 204,
      }
   )
}