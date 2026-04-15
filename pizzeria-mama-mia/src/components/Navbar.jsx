import { formatPrice } from "../utils/formatPrice";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <span className="navbar-brand fw-bold mb-0">Pizzería Mamma Mia!</span>
        <button className="btn btn-sm btn-outline-light">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-sm btn-outline-light">🔓 Profile</button>
            <button className="btn btn-sm btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-sm btn-outline-light">🔐 Login</button>
            <button className="btn btn-sm btn-outline-light">
              🔐 Register
            </button>
          </>
        )}
      </div>

      <button className="btn btn-sm btn-outline-info">
        🛒 Total: ${formatPrice(total)}
      </button>
    </nav>
  );
};

export default Navbar;
