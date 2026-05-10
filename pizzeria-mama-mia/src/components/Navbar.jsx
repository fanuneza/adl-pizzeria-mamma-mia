import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatPrice } from "../utils/formatPrice";
import "./Navbar.css";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <Link to="/" className="navbar-brand fw-bold mb-0">
          Pizzería Mamma Mía!
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-light">
          🍕 Home
        </Link>
        {token ? (
          <>
            <Link to="/profile" className="btn btn-sm btn-outline-light">
              🔓 Perfil
            </Link>
            <button className="btn btn-sm btn-outline-light" onClick={logout}>
              🔒 Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-outline-light">
              🔐 Iniciar sesión
            </Link>
            <Link to="/register" className="btn btn-sm btn-outline-light">
              🔐 Registrarse
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
