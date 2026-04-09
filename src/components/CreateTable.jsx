import { useSelector } from "react-redux";

const OrderTable = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div className="card shadow">
      <div className="card-body">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Order ID</th>
              <th>User ID</th>
              <th>Total Price</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  No Orders Found
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.userId}</td>
                  <td className="text-success fw-bold">
                    ₹ {order.totalAmount}
                  </td>
                  <td>
                    {new Date(order.createdAt).toLocaleString()}
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