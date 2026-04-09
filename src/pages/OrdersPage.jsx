import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../features/orders/orderSlice";
import OrderTable from "../components/OrderTable";
import CreateOrderModal from "../components/CreateOrderModal";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const { pagination } = useSelector((state) => state.orders);

  const [showModal, setShowModal] = useState(false);

  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
    startDate: "",
    endDate: "",
    minAmount: "",
    maxAmount: "",
    sortBy: "",
  });

  useEffect(() => {
    dispatch(fetchOrders(filters));
  }, [filters, dispatch]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
      page: 1, 
    });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-1">
        <h2>Orders Listing</h2>
      </div>

      <div className="card p-3 mb-2">
        <div className="row g-1">
          <div className="col">
            <input
              type="date"
              name="startDate"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="col">
            <input
              type="date"
              name="endDate"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="col">
            <input
              type="number"
              name="minAmount"
              placeholder="Min Amount"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="col">
            <input
              type="number"
              name="maxAmount"
              placeholder="Max Amount"
              className="form-control"
              onChange={handleChange}
            />
          </div>

          <div className="col">
            <select
              name="sortBy"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">Sort</option>
              <option value="latest">Latest</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
            </select>
          </div>

          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              + Create Order
            </button>
          </div>
        </div>
      </div>

      <OrderTable />

      <div className="d-flex justify-content-between mt-1 align-items-center">
        <button
          className="btn btn-secondary"
          disabled={pagination.page === 1}
          onClick={() => setFilters({ ...filters, page: pagination.page - 1 })}
        >
          Previous
        </button>

        <span>
          Page {pagination.page} of {pagination.totalPages}
        </span>

        <span>Total Orders {pagination.total}</span>

        <button
          className="btn btn-secondary"
          disabled={pagination.page >= pagination.totalPages}
          onClick={() => setFilters({ ...filters, page: pagination.page + 1 })}
        >
          Next
        </button>
      </div>

      {showModal && <CreateOrderModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default OrdersPage;
