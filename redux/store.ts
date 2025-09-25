import { configureStore } from "@reduxjs/toolkit"
import accountReducer from './slices/auth/authSlice';
import cartReducer from './slices/cart/cartSlice';
import preferencesReducer from './slices/preferences/preferencesSlice';
import uiReducer from './slices/ui/uiSlice';
// import { cartItemsMiddleware } from "./middlewares/cartItemsMiddleware";
import { listenerMiddleware } from "./listenerMiddlwares";

export const makeStore = () => {

   return configureStore({
      reducer: {
         account: accountReducer,
         cart: cartReducer,
         preferences: preferencesReducer,
         ui: uiReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
   })
}

/* ------------------ Subscriptions -------------- */

/* ------------------ Types -------------------- */
export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch'];