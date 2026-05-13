import { createContext, useCallback, useContext, useState } from "react";

const UserContext = createContext();

const API_URL = "http://localhost:5000";

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [email, setEmail] = useState(() => localStorage.getItem("email"));
  const [profile, setProfile] = useState(null);

  const saveSession = (authData) => {
    const receivedToken = authData.token;
    const receivedEmail = authData.email;

    setToken(receivedToken);
    setEmail(receivedEmail);

    localStorage.setItem("token", receivedToken);
    localStorage.setItem("email", receivedEmail);
  };

  const login = async (email, password) => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || data.message || "No se pudo iniciar sesión.",
      );
    }

    saveSession(data);
    return data;
  };

  const register = async (email, password) => {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || data.message || "No se pudo registrar el usuario.",
      );
    }

    saveSession(data);
    return data;
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    setProfile(null);

    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const getProfile = useCallback(async () => {
    if (!token) {
      throw new Error("No hay una sesión activa.");
    }

    const response = await fetch(`${API_URL}/api/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || data.message || "No se pudo obtener el perfil.",
      );
    }

    setProfile(data);
    return data;
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        profile,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
