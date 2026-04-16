import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h1 className="notfound-code">404</h1>
        <p className="notfound-emoji">🍕</p>
        <h2 className="notfound-title">¡Página no encontrada!</h2>
        <p className="notfound-message">
          Parece que esta página se la comió alguien. La ruta que buscas no
          existe.
        </p>
        <Link to="/" className="btn btn-dark notfound-btn">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
