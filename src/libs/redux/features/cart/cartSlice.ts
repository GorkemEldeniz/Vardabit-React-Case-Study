import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  name: string;
  price: number;
  count: number;
}

const initialState: CartState[] = JSON.parse(
  localStorage.getItem("cart") || "[]"
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartState>) => {
      const existingItemIndex = state.findIndex(
        (item) => item.name === action.payload.name
      );
      if (existingItemIndex !== -1) {
        // Item exists, increase the count
        state[existingItemIndex].count += action.payload.count; // Assuming action.payload.count is provided
      } else {
        // Item does not exist, push new item
        state.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state)); // Save to localStorage
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const newState = state.filter((item) => item.name !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    },
    decreaseCountByOne: (state, action: PayloadAction<string>) => {
      const itemIndex = state.findIndex((item) => item.name === action.payload);
      if (itemIndex !== -1) {
        if (state[itemIndex].count > 1) {
          state[itemIndex].count -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    increaseCountByOne: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.name === action.payload);
      if (item) {
        item.count += 1;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, increaseCountByOne, decreaseCountByOne } =
  cartSlice.actions;

export default cartSlice.reducer;
