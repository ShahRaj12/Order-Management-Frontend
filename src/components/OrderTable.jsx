import { useSelector } from "react-redux";

const OrderTable = () => {
  const { orders, loading } = useSelector((state) => state.orders);

  if (loading) {
    return (
      <div className="text-center mt-4">
        <div className="spinner-border text-primary" />
        <p className="mt-2">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="card shadow">
      <div className="card-body">
        <table className="table table-hover align-middle">
          
          {/* Table Header */}
          <thead className="table-light">
            <tr>
              <th>Order ID</th>
              <th>User ID</th>
              <th>Total Price</th>
              <th>Date</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-muted py-4">
                  No Orders Found
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id || order.id}>
                  
                  {/* Order ID */}
                  <td>{order._id || order.id}</td>

                  {/* User ID */}
                  <td>{order.userId}</td>

                  {/* Total Price */}
                  <td className="text-success fw-bold">
                    ₹ {order.totalAmount}
                  </td>

                  {/* Date */}
                  <td className="text-muted">
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleString()
                      : "-"}
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
      
    </div>
  );
};

export default OrderTable;