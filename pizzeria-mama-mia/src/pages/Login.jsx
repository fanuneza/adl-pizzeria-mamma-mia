import { useState } from "react";
import "./Login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Todos los campos son obligatorios.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    alert("¡Autenticación exitosa!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar sesión</h2>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 mt-2" onClick={handleSubmit}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
