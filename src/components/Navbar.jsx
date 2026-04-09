import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-primary px-4">
      <span className="navbar-brand">Order System</span>

      <div className="ms-auto d-flex gap-3">

        <Link
          to="/"
          className={`nav-link ${
            location.pathname === "/" ? "text-warning" : "text-white"
          }`}
        >
          Orders
        </Link>

        <Link
          to="/analytics"
          className={`nav-link ${
            location.pathname === "/analytics"
              ? "text-warning"
              : "text-white"
          }`}
        >
          Analytics
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;