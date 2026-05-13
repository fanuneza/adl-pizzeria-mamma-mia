import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./Profile.css";

const Profile = () => {
  const { email, logout, getProfile } = useUser();
  const navigate = useNavigate();

  const [profileEmail, setProfileEmail] = useState(email);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await getProfile();
        setProfileEmail(profile.email || email);
      } catch (error) {
        setError(error.message);
      }
    };

    loadProfile();
  }, [getProfile, email]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">👤</div>
        <h2 className="profile-title">Mi perfil</h2>

        {error && <div className="alert alert-warning">{error}</div>}

        <div className="profile-info">
          <span className="profile-label">Correo electrónico</span>
          <span className="profile-email">{profileEmail}</span>
        </div>

        <button className="btn btn-dark profile-btn" onClick={handleLogout}>
          Cerrar sesión 🔒
        </button>
      </div>
    </div>
  );
};

export default Profile;
