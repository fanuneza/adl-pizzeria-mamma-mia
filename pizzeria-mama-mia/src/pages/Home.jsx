import { useState, useEffect } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas as localPizzas } from "../utils/pizzas";
import { API_BASE_URL, IMAGES_URL } from "../utils/api";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/pizzas`)
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch(() => {
        setPizzas(localPizzas);
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map((pizza) => (
            <div className="col" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={`${IMAGES_URL}/${pizza.img}`}
                desc={pizza.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
