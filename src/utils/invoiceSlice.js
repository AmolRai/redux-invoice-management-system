import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    items: [],
  },
  reducers: {
    addInvoice: (state, action) => {
      state.items.push(action.payload);
    },
    removeInvoice: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    editInvoice: (state, action) => {
      state.items[action.payload.index] = action.payload.invoiceData;
    },
  },
});

export const { addInvoice, removeInvoice, editInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
