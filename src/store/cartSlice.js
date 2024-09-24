import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// It will return actions & reducer
// Actions are for like add or delete
export const { add, remove } = cartSlice.actions;
// reducer to get state
export default cartSlice.reducer;
