import "./Header.css";

const Header = () => {
  return (
    <div className="header d-flex align-items-center justify-content-center">
      <div className="header-overlay text-white text-center">
        <h1 className="fw-bold">¡Pizzería Mamma Mia!</h1>
        <p className="lead">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </div>
  );
};

export default Header;
