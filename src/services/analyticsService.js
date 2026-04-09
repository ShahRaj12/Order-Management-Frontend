import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getTopProductsAPI = () =>
  API.get("/analytics/top-products");

export const getRevenueAPI = (interval = "day") =>
  API.get(`/analytics/revenue?interval=${interval}`);

export const getUserSummaryAPI = (userId) =>
  API.get(`/analytics/user/${userId}`);