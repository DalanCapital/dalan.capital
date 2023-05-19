import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";

// Define the initial state using that type
const initialState = {
  isDisabled: true,
};

export const inputStates = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    TOGGLE_DISABLED: (state) => {
      state.isDisabled = !state.isDisabled;
    },
  },
});

export const { TOGGLE_DISABLED } = inputStates.actions;

// Other code such as selectors can use the imported `RootState` type
export const inputState = (state: RootState) => state.inputStates;

export default inputStates.reducer;
