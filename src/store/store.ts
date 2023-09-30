import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authUsers/authSection";
import histogramSlice from "../authUsers/histogramSection";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    histogram: histogramSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;