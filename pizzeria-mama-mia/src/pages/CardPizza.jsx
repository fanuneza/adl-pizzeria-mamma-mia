import "./CardPizza.css";
import { formatPrice } from "../utils/formatPrice";
import { useCart } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { cart, addToCart, removeFromCart } = useCart();

  const cartItem = cart.find((item) => item.id === id);

  const handleAddToCart = () => {
    addToCart({ id, name, price, ingredients, img, desc });
  };

  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title fw-bold">Pizza {name}</h5>
        <p className="card-desc">{desc}</p>
        <p className="ingredients-label">Ingredientes:</p>
        <ul className="ingredients-list">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <p className="price-text fw-bold">Precio: ${formatPrice(price)}</p>
        <div className="d-flex justify-content-between card-buttons">
          <button className="btn btn-sm btn-outline-secondary">
            Ver Más »
          </button>

          {cartItem ? (
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => removeFromCart(id)}
              >
                −
              </button>
              <span>{cartItem.count}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={handleAddToCart}
              >
                +
              </button>
            </div>
          ) : (
            <button className="btn btn-sm btn-dark" onClick={handleAddToCart}>
              Añadir 🛒
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
