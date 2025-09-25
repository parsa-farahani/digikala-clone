import { ID, Query } from "appwrite";
import { parseStringify } from "@/lib/utils";
import { client, account, appwriteConfig, avatars, databases } from "../clientConfig";
import { redirect } from "next/navigation";
import { createNewCart } from "./cart";


type SignUpUser = {
   email: string;
   password: string;
}

type SignInUser = {
   email: string;
   password: string;
}


// User Authentication
export const signupAccount = async (user: SignUpUser) => {

 
   try {
      
      const newAccount = await account.create(
         ID.unique(),
         user.email,
         user.password
      )

      // console.log('NEW ACCOUNT: ', newAccount);


      if (!newAccount) throw new Error;

      const avatarUrl = avatars.getInitials('User');

      await saveUserToDB(
         {
            accountId: newAccount.$id,
            email: newAccount.email,
            imageUrl: avatarUrl,
         }
      )

      const session = await signinAccount(user);
      

      if (!session || ('status' in session)){

         if (session?.status === 500) {
            redirect('/login');
         }

         return;
      }


      // for now, since the project has not a common-domain with Appwrite backend, I need to set/delete my own 'session cookie'. to do this I use Route-Hanlders. this logic will be changed in production mode of the project
      await fetch('/api/auth/set-login-session', {
         method: 'POST',
         body: JSON.stringify({
            sessionId: session.$id
         }),
         headers: {
            'Content-Type': 'application/json',
         }
      })

      return session;

   } catch (error) {
      console.log('🔴 signupAccount() Error: ', error);
      return {
         status: 500,
         error,
      }
   }
}

// Adding the  User --to--> DB  (after 'auth')
export const saveUserToDB = async (user: {
   accountId: string;
   email: string;
   imageUrl: URL;
}) => {

   try {

      const newUser = await databases.createDocument(
         appwriteConfig.databaseId!,
         appwriteConfig.userCollectionId!,
         user.accountId,
         user
      );

      if (!newUser) throw Error;
      
      const newCart = await createNewCart(newUser.$id);

      // console.log('🦕 saveUsertoDB - cart: ', newCart);

      if (!newCart) throw Error;

      return newUser;
      
   } catch (error) {
      console.log('🔴 saveUserToDB() Error: ', error);
      return {
         status: 500,
         error,
      }  
   }
}

// To sign-in an 'existing account'
export const signinAccount = async (user: SignInUser) => {
   
   try {
      
      const session = await account.createEmailSession(
         user.email,
         user.password
      )

      if (!session) throw Error;

      // jwt for current session
      // const jwt = await account.createJWT();
      // client.setJWT(jwt.jwt);   

      // for now, because the project has not a common-domain with Appwrite backend, I need to set/delete session cookie of my own. to do this I use Route-Hanlders. this logic will be changed in production mode of the project
      await fetch('/api/auth/set-login-session', {
         method: 'POST',
         body: JSON.stringify({
            sessionId: session.$id
         }),
         headers: {
            'Content-Type': 'application/json',
         }
      })

      return session;
      
   } catch (error) {
      console.log('🔴 signinAccount() Error: ', error);
      return {
         status: 500,
         error,
      }
   }
}


export const signoutAccount = async () => {
   try {

      const session = await account.deleteSession('current');

      const deleteCookieRes = await fetch('/api/auth/delete-login-session', {
         method: 'POST',
      })


      if (!deleteCookieRes.ok) throw new Error;

      return session;
   } catch (error) {
      console.log('🔴 signoutAccount() Error: ', error);
   }
}


export const getCurrentUser = async () => {

   try {

      const currentAccount = await account.get();

      if (!currentAccount) throw Error;
      
      const currentUser = await databases.listDocuments(
         appwriteConfig.databaseId!,
         appwriteConfig.userCollectionId!,
         [Query.equal('accountId', currentAccount.$id)]
      )

      if (!currentUser) throw Error;
      
      return currentUser.documents[0];
      
   } catch (error) {
      console.log('🔴 getCurrentUser() Error: ', error);
      throw error;
   }
}

