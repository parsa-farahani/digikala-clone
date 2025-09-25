import { createSlice } from "@reduxjs/toolkit";

type PREFERENCES_STATE = {
   theme: 'light' | 'dark';
   lang: 'fa';
}

const initialState: PREFERENCES_STATE = {
   theme: 'light',
   lang: 'fa',
}

const preferencesSlice = createSlice({
   name: 'preferences',
   initialState,
   reducers: {
      
   },
})

export const {
} = preferencesSlice.actions;

export default preferencesSlice.reducer;