import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { API_BASE_URL, IMAGES_URL } from "../utils/api";
import { formatPrice } from "../utils/formatPrice";
import "./Pizza.css";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [pizzaState, setPizzaState] = useState({ id: null, pizza: null });
  const pizza = pizzaState.id === id ? pizzaState.pizza : null;

  useEffect(() => {
    let ignore = false;

    fetch(`${API_BASE_URL}/api/pizzas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          setPizzaState({ id, pizza: data });
        }
      })
      .catch((error) => console.error("Error al cargar la pizza:", error));

    return () => {
      ignore = true;
    };
  }, [id]);

  if (!pizza) {
    return <p className="pizza-loading">Cargando...</p>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...pizza,
      img: `${IMAGES_URL}/${pizza.img}`,
    });
  };

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
          <button className="btn btn-dark pizza-detail__btn" onClick={handleAddToCart}>
            Añadir al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
