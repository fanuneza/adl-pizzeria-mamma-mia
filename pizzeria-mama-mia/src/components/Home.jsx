import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../utils/pizzas";

const Home = () => {
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
                img={pizza.img}
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
