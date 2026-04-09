import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchOrdersAPI = (params) =>
  API.get("/orders", { params });

export const createOrderAPI = (data) =>
  API.post("/orders", data);