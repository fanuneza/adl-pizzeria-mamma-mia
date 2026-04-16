import { useState, useEffect } from "react";
import { formatPrice } from "../utils/formatPrice";
import { API_BASE_URL, IMAGES_URL } from "../utils/api";
import "./Pizza.css";

const PIZZA_ID = "p001";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/pizzas/${PIZZA_ID}`)
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error al cargar la pizza:", error));
  }, []);

  if (!pizza) {
    return <p className="pizza-loading">Cargando...</p>;
  }

  return (
    <div className="container pizza-detail my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={`${IMAGES_URL}/${pizza.img}`}
            alt={pizza.name}
            className="pizza-detail__img img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="pizza-detail__name">Pizza {pizza.name}</h2>
          <p className="pizza-detail__desc">{pizza.desc}</p>
          <p className="pizza-detail__ingredients-label">Ingredientes:</p>
          <ul className="pizza-detail__ingredients">
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="pizza-detail__price">
            Precio: <strong>${formatPrice(pizza.price)}</strong>
          </p>
          <button className="btn btn-dark pizza-detail__btn">
            Añadir al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
