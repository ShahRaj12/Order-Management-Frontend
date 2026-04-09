import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTopProductsAPI,
  getRevenueAPI,
  getUserSummaryAPI,
} from "../../services/analyticsService";

export const fetchTopProducts = createAsyncThunk(
  "analytics/topProducts",
  async () => {
    const res = await getTopProductsAPI();
    return res.data;
  }
);

export const fetchRevenue = createAsyncThunk(
  "analytics/revenue",
  async (interval) => {
    const res = await getRevenueAPI(interval);
    return res.data;
  }
);

export const fetchUserSummary = createAsyncThunk(
  "analytics/userSummary",
  async (userId) => {
    const res = await getUserSummaryAPI(userId);
    return res.data;
  }
);

const analyticsSlice = createSlice({
  name: "analytics",
  initialState: {
    topProducts: [],
    revenue: [],
    userSummary: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchTopProducts.fulfilled, (state, action) => {
        state.topProducts = action.payload.data.map((item) => ({
          productId: item._id,
          totalSold: item.totalSold,
        }));
      })

      .addCase(fetchRevenue.fulfilled, (state, action) => {
        state.revenue = action.payload.data.map((item) => ({
          date: `${item._id.year}-${String(item._id.month).padStart(2, "0")}${item._id.day ? `-${String(item._id.day).padStart(2, "0")}` : ""}`,
          revenue: item.totalRevenue,
        }));
      })

      .addCase(fetchUserSummary.fulfilled, (state, action) => {
        state.userSummary = action.payload.data;
      });
  },
});

export default analyticsSlice.reducer;