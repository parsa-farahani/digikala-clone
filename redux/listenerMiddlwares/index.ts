import { createListenerMiddleware, addListener } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../store";
import { cartItemsListener } from "../slices/cart/cartSlice";
import { logoutListener } from "../slices/auth/authSlice";


export const listenerMiddleware  = createListenerMiddleware();

export const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();


export type AppStartListening = typeof startAppListening;

export const addAppListener = addListener.withTypes<RootState, AppDispatch>();


export type AppAddListener = typeof addAppListener;


// ------------------------ Listeners ------------------------- //
cartItemsListener( startAppListening );
logoutListener( startAppListening );