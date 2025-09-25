import { signoutAccount } from "@/lib/appwrite/actions/account"
import { useMutation } from "@tanstack/react-query"

export const useSignOutAccount = () => {

   return useMutation(
      {
         mutationFn: () => signoutAccount(),
      }
   )
}