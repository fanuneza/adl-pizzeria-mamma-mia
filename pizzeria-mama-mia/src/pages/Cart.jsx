import { useState } from "react";
import { pizzaCart } from "../utils/pizzas";
import { formatPrice } from "../utils/formatPrice";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const handleIncrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

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
                onClick={() => handleDecrease(item.id)}
              >
                −
              </button>
              <span className="cart-item-count">{item.count}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleIncrease(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <p className="cart-total">Total: ${formatPrice(total)}</p>
        <button className="btn btn-secondary">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;