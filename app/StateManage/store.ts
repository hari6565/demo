import { configureStore } from "@reduxjs/toolkit";
import NextUISlice from "./NextUISlice";
import UINodeSlice from "./UINodeSlice";

export const store = configureStore({
  reducer: {
    counter: NextUISlice,
    UFNodes: UINodeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
