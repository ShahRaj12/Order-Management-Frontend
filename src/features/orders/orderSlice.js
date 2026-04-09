import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrdersAPI, createOrderAPI } from "../../services/orderService";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (params, { rejectWithValue }) => {
    try {
      const res = await fetchOrdersAPI(params);
      return res.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching orders");
    }
  }
);

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (data, { rejectWithValue }) => {
    try {
      const res = await createOrderAPI(data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error creating order");
    }
  }
);

const initialState = {
  orders: [],
  loading: false,
  error: null,
  pagination: {
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
  },
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.data;
        state.pagination = action.payload.pagination;
      })

      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })

      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.unshift(action.payload);
      })

      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;