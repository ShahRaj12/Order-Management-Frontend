const ProductRow = ({ item, index, updateItem }) => {
  return (
    <div className="row mb-2">
      <div className="col">
        <input
          className="form-control"
          placeholder="Product ID"
          value={item.productId}
          onChange={(e) =>
            updateItem(index, "productId", e.target.value)
          }
        />
      </div>

      <div className="col">
        <input
          type="number"
          className="form-control"
          placeholder="Price"
          value={item.price}
          onChange={(e) =>
            updateItem(index, "price", Number(e.target.value))
          }
        />
      </div>

      <div className="col">
        <input
          type="number"
          className="form-control"
          placeholder="Quantity"
          value={item.quantity}
          onChange={(e) =>
            updateItem(index, "quantity", Number(e.target.value))
          }
        />
      </div>
    </div>
  );
};

export default ProductRow;