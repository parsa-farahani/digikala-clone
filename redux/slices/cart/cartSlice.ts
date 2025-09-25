import { CartDocument, CartItemDocument } from "@/lib/appwrite/actions/cart";
import { AppStartListening } from "@/redux/listenerMiddlwares";
import { RootState } from "@/redux/store";
import { createSelector, createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { Models } from "appwrite";


type CART_STATE = {
   items: CCartProduct[];
   totalQuantity: number;
   totalAmount: number;
   totalDiscounts: number;
}


// Saved items are kept in 'localStorage' 
// I added a middleware (cartItemsMiddleware) to the 'store', which saves the cartItems on each action that has 'action.type: cart/*'
const savedItems = (typeof window !== 'undefined') ? JSON.parse(localStorage.getItem('cartItems') || '[]') : [];


const initialState: CART_STATE = {
   items: savedItems,
   totalQuantity: 0,
   totalAmount: 0,    // Rials
   totalDiscounts: 0, // Rials
}


const findItemIndex = (items: CCartProduct[], id: string) => {
   return items.findIndex((item) => item.productId === id);
}


const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      // when the user logs in, I populate client-cart with server-cart tems
      populateCart: (state, action: PayloadAction<Models.Document>) => {

         const items = action.payload.cartItem;

         const newItems = items.map((item: CartItemDocument) => (
            {
               serverId: item.$id,
               productId: item.product.$id,
               name: item.titleSnapshot,
               price: item.priceAtAdd,
               discountPerc: item.discountPercAtAdd,
               quantity: item.quantity,
               image: item.imageSnapshot,
               options: {
                  size: 'M',
                  color: 'white',
               }
            }
         ))

         state.items = newItems;
      },
      // when 'clearCart' fails (optimistic update), I restore the cart with previous items
      restoreCart: (state, action: PayloadAction<CCartProduct[]>) => {

         const items = action.payload;

         state.items = [...items];
      },
      clearCart: (state) => {
         state.items = [];
      },
      addToCart: (state, action: PayloadAction<CCartProduct>) => {

         const newItem = action.payload;

         const itemIndex = findItemIndex(state.items, newItem.productId);

         if (itemIndex >= 0) {
            // the item is already exists -> increase the quantity
            state.items[itemIndex].quantity += 1;
         } else {
            state.items.push(newItem);
         }
      },
      decreaseItemQty: (state, action) => {

         const productId = action.payload;

         const itemIndex = findItemIndex(state.items, productId);

         if (itemIndex < 0) return;

         const item = state.items[itemIndex];

         if (item.quantity > 1) {
            state.items[itemIndex].quantity -= 1;
         } else {
            state.items.splice(itemIndex, 1);
         }
      },
      removeFromCart: (state, action: PayloadAction<string>) => {
         
         const productId = action.payload;
         
         const itemIndex = findItemIndex(state.items, productId);

         if (itemIndex < 0) return;

         state.items.splice(itemIndex, 1);
      },
      calcTotals: (state) => {

         const {
            totalQuantity,
            totalAmount,
            totalDiscounts,
         } = state.items.reduce((acc, item) => {
            acc.totalQuantity += item.quantity;
            acc.totalAmount += item.quantity * item.price;
            acc.totalDiscounts += item.quantity * Math.floor(item.price * (item.discountPerc / 100));
            return acc;
         }, { totalQuantity: 0, totalAmount: 0, totalDiscounts: 0 });

         state.totalQuantity = totalQuantity;
         state.totalAmount = parseFloat(totalAmount.toFixed(2));
         state.totalDiscounts = parseFloat(totalDiscounts.toFixed(2));
      }
   },
})


export const {
   populateCart,
   restoreCart,
   clearCart,
   addToCart,
   decreaseItemQty,
   removeFromCart,
   calcTotals,
} = cartSlice.actions;


export const selectCartItems = (state: RootState) => state.cart.items;


export const selectCartItemById = createSelector(  // args: state, cartItemId (cartItem-document $id)
   selectCartItems,
   (state: RootState, productId: string) => productId,
   (allItems, productId) => allItems.find(item => item.productId === productId)
);

export const selectCartItemProductQty = createSelector(  // args: state, productId (cartItem-docuemnt -> product-doucment $id)
   selectCartItems,
   (state: RootState, productId: string) => productId,
   (allItems, productId) => allItems.find(item => item.productId === productId)?.quantity ?? 0
);

// export const selectCartItemById = (state: RootState, id: string) => state.cart.items.find(item => item.serverId === id);


export const selectCartTotalQty = (state: RootState) => state.cart.totalQuantity;

export const selectCartTotalAmount = (state: RootState) => state.cart.totalAmount;

export const selectCartTotalDiscounts = (state: RootState) => state.cart.totalDiscounts;

export default cartSlice.reducer;



// ---------------------- Listener Middlewares -------------------------- //
export const cartItemsListener = (startAppListening: AppStartListening) => {

   startAppListening(
      {
         matcher: isAnyOf(
            populateCart,
            clearCart,
            addToCart,
            decreaseItemQty,
            removeFromCart,
         ),
         effect: (action, listenerApi) => {

            const { dispatch, getState } = listenerApi;

            const { cart } = getState();

            // Update cart-totals
            dispatch( calcTotals() );


            // Update localStorage cartItems
            const serializedCart = JSON.stringify(cart.items);
            localStorage.setItem('cartItems', serializedCart)
         }
      }
   )
}