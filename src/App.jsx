import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;