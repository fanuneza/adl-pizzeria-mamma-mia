import "./Profile.css";

const Profile = () => {
  const email = "pizzaiolo@mammamia.cl";

  const handleLogout = () => {
    alert("Sesión cerrada");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">👤</div>
        <h2 className="profile-title">Mi perfil</h2>
        <div className="profile-info">
          <span className="profile-label">Correo electrónico</span>
          <span className="profile-email">{email}</span>
        </div>
        <button className="btn btn-dark profile-btn" onClick={handleLogout}>
          Cerrar sesión 🔒
        </button>
      </div>
    </div>
  );
};

export default Profile;
