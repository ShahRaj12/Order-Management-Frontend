import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder, fetchOrders } from "../features/orders/orderSlice";
import ProductRow from "./ProductRow";

const CreateOrderModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [items, setItems] = useState([
    { productId: "", price: 0, quantity: 1 },
  ]);

  const addProduct = () => {
    setItems([...items, { productId: "", price: 0, quantity: 1 }]);
  };

  const updateItem = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

const handleSubmit = async () => {
  await dispatch(
    createOrder({
      userId,
      items,
    })
  );
  dispatch(fetchOrders());
  onClose();
};

  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title btn btn-info">Create Order</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <label>User ID</label>
              <input
                className="form-control"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            <h6>Products</h6>

            {items.map((item, index) => (
              <ProductRow
                key={index}
                item={item}
                index={index}
                updateItem={updateItem}
              />
            ))}

            <button
              className="btn btn-outline-primary mt-2"
              onClick={addProduct}
            >
              + Add Product
            </button>

            <div className="mt-3">
              <strong>Total: </strong>
              <span className="text-success fw-bold">₹ {totalAmount}</span>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>

            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderModal;
