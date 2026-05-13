import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatPrice } from "../utils/formatPrice";
import "./Cart.css";

const API_URL = "http://localhost:5000";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total, clearCart } = useCart();
  const { token } = useUser();

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setSuccessMessage("");
    setError("");

    if (!token) {
      setError("Debes iniciar sesión para comprar.");
      return;
    }

    if (cart.length === 0) {
      setError("El carrito está vacío.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/checkouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || data.message || "No se pudo realizar la compra.",
        );
      }

      setSuccessMessage("Compra realizada con éxito.");

      if (clearCart) {
        clearCart();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <div className="cart-box">
        <h5 className="cart-title">Detalles del pedido:</h5>

        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <span className="cart-item-name">{item.name}</span>
            <span className="cart-item-price">${formatPrice(item.price)}</span>
            <div className="cart-item-controls">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => removeFromCart(item.id)}
              >
                -
              </button>
              <span className="cart-item-count">{item.count}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => addToCart(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <p className="cart-total">Total: ${formatPrice(total)}</p>

        <button
          className="btn btn-secondary"
          disabled={loading}
          onClick={handleCheckout}
        >
          {loading ? "Procesando..." : "Pagar"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
