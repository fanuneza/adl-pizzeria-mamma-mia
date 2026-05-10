import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatPrice } from "../utils/formatPrice";
import "./Cart.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();
  const { token } = useUser();

  return (
    <div className="container my-4">
      <div className="cart-box">
        <h5 className="cart-title">Detalles del pedido:</h5>

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
        <button className="btn btn-secondary" disabled={!token}>
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;
