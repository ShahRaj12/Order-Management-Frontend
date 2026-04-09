import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/orders/orderSlice";
import analyticsReducer from "../features/analytics/analyticsSlice";

export const store = configureStore({
  reducer: {
    orders: orderReducer,
    analytics: analyticsReducer,
  },
});