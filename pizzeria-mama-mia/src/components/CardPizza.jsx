import "./CardPizza.css";
import { formatPrice } from "../utils/formatPrice";

const CardPizza = ({ name, price, ingredients, img, desc }) => {
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
          <button className="btn btn-sm btn-dark">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
