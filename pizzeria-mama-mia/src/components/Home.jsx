import Header from "./Header";
import CardPizza from "./CardPizza";
import napolitana from "../assets/pizza-napolitana.jpg";
import pepperoni from "../assets/pizza-pepperoni.jpg";
import espanola from "../assets/pizza-espanola.jpg";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={napolitana}
            />
          </div>
          <div className="col">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={[
                "mozzarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              img={espanola}
            />
          </div>
          <div className="col">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img={pepperoni}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
