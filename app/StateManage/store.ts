import { configureStore } from "@reduxjs/toolkit";
import NextUISlice from "./NextUISlice";

export const store = configureStore({
  reducer: {
    counter: NextUISlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
