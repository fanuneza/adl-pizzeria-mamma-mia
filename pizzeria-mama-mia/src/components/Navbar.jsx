import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import "./Navbar.css";

const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <Link to="/" className="navbar-brand fw-bold mb-0">
          Pizzería Mamma Mia!
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-light">
          🍕 Home
        </Link>
        {token ? (
          <>
            <Link to="/profile" className="btn btn-sm btn-outline-light">
              🔓 Profile
            </Link>
            <button className="btn btn-sm btn-outline-light">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-outline-light">
              🔐 Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-outline-light">
              🔐 Register
            </Link>
          </>
        )}
      </div>

      <Link to="/cart" className="btn btn-sm btn-outline-info">
        🛒 Total: ${formatPrice(total)}
      </Link>
    </nav>
  );
};

export default Navbar;