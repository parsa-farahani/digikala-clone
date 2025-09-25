import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type UI_STATE = {
   isHeaderNavCollapsed: boolean
}

const initialState: UI_STATE = {
   isHeaderNavCollapsed: false,
}

const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      headerNavCollapsed: (state) => {
         state.isHeaderNavCollapsed = true;
      },
      headerNavExpanded: (state) => {
         state.isHeaderNavCollapsed = false;
      },
   },
})

export const {
   headerNavCollapsed,
   headerNavExpanded,
} = uiSlice.actions;

export const selectIsHeaderNavCollapsed = (state: RootState) => state.ui.isHeaderNavCollapsed;

export default uiSlice.reducer;