import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchTopProducts,
  fetchRevenue,
  fetchUserSummary,
} from "../features/analytics/analyticsSlice";

import TopProductsChart from "../components/charts/TopProductsChart";
import RevenueChart from "../components/charts/RevenueChart";

const AnalyticsPage = () => {
  const dispatch = useDispatch();

  const { topProducts, revenue, userSummary } = useSelector(
    (state) => state.analytics,
  );

  console.log("AnalyticsPage - topProducts:", topProducts); 
  console.log("AnalyticsPage - revenue:", revenue);

  const [userId, setUserId] = useState("");
  const [interval, setInterval] = useState("day");

  useEffect(() => {
    dispatch(fetchTopProducts());
    dispatch(fetchRevenue(interval));
  }, [dispatch, interval]);

  const handleUserSearch = () => {
    if (userId) {
      dispatch(fetchUserSummary(userId));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Analytics Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Top Products</h5>
            <TopProductsChart data={topProducts} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Revenue</h5>

            <select
              className="form-control mb-2"
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
            >
              <option value="day">Day</option>
              <option value="month">Month</option>
            </select>

            {revenue && <RevenueChart data={revenue} />}
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>User Summary</h5>

            <div className="d-flex gap-2 mb-2">
              <input
                className="form-control"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleUserSearch}>
                Search
              </button>
            </div>

            {userSummary && (
              <>
                <p>Total Orders: {userSummary.totalOrders}</p>
                <p>Total Spend: ₹{userSummary.totalSpend}</p>
                <p>Avg Order: ₹{userSummary.avgOrderValue}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
