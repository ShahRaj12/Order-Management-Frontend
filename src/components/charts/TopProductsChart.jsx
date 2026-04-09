import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TopProductsChart = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-muted">No data available</p>;
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="productId" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalSold" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-3">
        <h6 className="fw-bold">Top Products List</h6>

        <ul className="list-group">
          {data.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{index + 1}. {item.productId}</span>

              <span className="badge bg-primary">
                {item.totalSold}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopProductsChart;