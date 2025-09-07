import { useEffect } from "react";
import styles from "./User.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function User() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/");
      }
    },
    [isAuthenticated, navigate]
  );

  function handleClick(e) {
    e.preventDefault();
    logout();
  }

  return (
    <div className={styles.user}>
      <img src={user?.avatar} alt={user?.name} />
      <span>Welcome, {user?.name}</span>
      <button onClick={(e) => handleClick(e)}>Logout</button>
    </div>
  );
}

export default User;
