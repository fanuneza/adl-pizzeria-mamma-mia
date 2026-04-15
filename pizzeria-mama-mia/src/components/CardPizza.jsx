import "./CardPizza.css";
import { formatPrice } from "../utils/formatPrice";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">Pizza {name}</h5>
        <p className="text-muted small mb-1">Ingredientes:</p>
        <p className="text-muted small">🍕 {ingredients.join(", ")}</p>
        <p className="fw-bold">Precio: ${formatPrice(price)}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-sm btn-outline-secondary">
            Ver Más »
          </button>
          <button className="btn btn-sm btn-dark">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
