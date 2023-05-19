import { configureStore } from "@reduxjs/toolkit";
import { inputStates } from "./reducers/inputStates";

export const store = configureStore({
  reducer: {
    inputStates: inputStates.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
