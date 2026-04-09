# 📊 Frontend Analytics Dashboard

A modern **React + Vite** frontend application for managing orders and visualizing analytics like revenue trends and top-selling products.

---

## 🚀 Tech Stack

* React 19
* Vite
* Redux Toolkit
* React Router DOM
* Axios
* Recharts
* Bootstrap + Tailwind CSS

---

## 📁 Setup

```bash
git clone https://github.com/ShahRaj12/Order-Management-Frontend.git
cd Order-Management-Frontend-main
npm install
npm run dev
```

---

## 🌐 API Base URL

```
http://localhost:5000/api
```

---

## 📦 Orders API

### ➤ Create Order

**POST /orders**

```json
{
  "userId": "U3",
  "items": [
    { "productId": "P7", "price": 1200, "quantity": 3 },
    { "productId": "P8", "price": 1600, "quantity": 2 }
  ]
}
```

---

### ➤ Get Orders

**GET /orders**

Query Params:

* page, limit
* startDate, endDate
* minAmount, maxAmount
* sortBy (lowest/highest)

Example:

```
/orders?page=1&limit=10&minAmount=2000&sortBy=lowest
```

---

## 📊 Analytics API

### ➤ Top Products

```
GET /analytics/top-products
```

### ➤ Revenue

```
GET /analytics/revenue?interval=day|month
```

### ➤ User Summary

```
GET /analytics/user/:userId
```

---

## 🔌 API Integration

```js
// Analytics
export const getTopProductsAPI = () =>
  API.get("/analytics/top-products");

export const getRevenueAPI = (interval = "day") =>
  API.get(`/analytics/revenue?interval=${interval}`);

export const getUserSummaryAPI = (userId) =>
  API.get(`/analytics/user/${userId}`);

// Orders
export const fetchOrdersAPI = (params) =>
  API.get("/orders", { params });

export const createOrderAPI = (data) =>
  API.post("/orders", data);
```

---

## 📊 Features

* Create & fetch orders
* Filters (date, amount)
* Pagination
* Revenue charts
* Top products chart
* User summary

---
## ⚠️ Notes

* Backend should run on `http://localhost:5000`
* Use ISO date format
* Enable CORS on backend

---

## 👨‍💻 Author

Raj Shah
