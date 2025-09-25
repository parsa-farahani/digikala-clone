import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getCurrentUser } from "@/lib/appwrite/actions/account";
import { AppStartListening } from "@/redux/listenerMiddlwares";
import { clearCart } from "../cart/cartSlice";


type CACCOUNT_STATE = {
   id?: string,
   name?: string,
   username?: string,
   email?: string,
   imageUrl?: string,
}

type AUTH_STATE = {
   user: CACCOUNT_STATE;
   isLoadingAccount: boolean;
   isAuth: boolean;

}


const initialUser: CACCOUNT_STATE = {
   id: '',
   name: '',
   username: '',
   email: '',
   imageUrl: '',
}

const initialState: AUTH_STATE = {
   user: initialUser,
   isLoadingAccount: false,
   isAuth: false,
}


const authSlice = createSlice({
   name: 'account',
   initialState,
   reducerPath: 'account',
   reducers: {
      clientLogout: (state) => {
         state.user = {};
         state.isAuth = false;
      }
   },
   extraReducers: (builder) => {
      builder
      .addCase(checkAuthUser.pending, (state) => {
         state.isLoadingAccount = true;
      })
      .addCase(checkAuthUser.fulfilled, (state, action) => {
         const user = action.payload!;

         state.user = {
            id: user.$id,
            name: '',
            username: '',
            email: user.email,
            imageUrl: user.imageUrl
         };

         state.isLoadingAccount = false;
         state.isAuth = true;
      })
      .addCase(checkAuthUser.rejected, (state) => {
         state.isLoadingAccount = false;
         state.user = {};
         state.isAuth = false;
      })
   }
})



export const checkAuthUser = createAsyncThunk('account/checkAuthUser', async () => {

   const currentUser = await getCurrentUser();

   return currentUser;
})



export const {
   clientLogout
} = authSlice.actions;


export const selectUser = (state: RootState) => state.account.user;
export const selectIsLoadingAccount = (state: RootState) => state.account.isLoadingAccount;
export const selectIsAuth = (state: RootState) => state.account.isAuth;


export default authSlice.reducer;


// ---------------------- Listener Middlewares -------------------------- //
export const logoutListener = (startAppListening: AppStartListening) => {

   startAppListening(
      {
         matcher: isAnyOf(
            clientLogout,
         ),
         effect: (action, listenerApi) => {

            const { dispatch } = listenerApi;

            // Update cart-totals
            dispatch( clearCart() );

         }
      }
   )
}