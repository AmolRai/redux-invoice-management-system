import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./invoiceSlice";

const appStore = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});

export default appStore;
