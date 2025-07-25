import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { logout, checkStoredToken } from "../../store/auth/authSlice";
import { profile } from "../../store/auth/authActions";

import Styles from "./Navbar.module.scss";

function NavBar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // Accès à l’état d’authentification dans le store
  const isAuthenticated = auth.isAuthenticated;

  // Vérifie si un token existe dans le Storage au montage du composant
  useEffect(() => {
    dispatch(checkStoredToken());
  }, [dispatch]);

  // Récupère les infos utilisateur si :
  // un token est présent & aucune info userName chargée & aucune erreur d'auth
  useEffect(() => {
    if (auth.token && !auth.userName && !auth.error) {
      dispatch(profile());
    }
  }, [auth.token, auth.userName, auth.error, dispatch]);

  // Fonction logout appelée au clic sur "Sign Out"
  const handleLogout = () => {
    dispatch(logout());
  };

  // Affichage conditionnel des liens selon l'état d'authentification
  return (
    <nav className={Styles.nav_container}>
      {isAuthenticated ? (
        <>
          <NavLink
            className={Styles.nav_item}
            to="/profile"
            aria-label="Profile"
          >
            <i className="fa fa-user-circle"></i>
            {auth.userName?.split(' ')[0] || "Loading..."}
          </NavLink>
          <NavLink className={Styles.nav_item}
            onClick={handleLogout}
            to="/"
            aria-label="Log out"
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </>
      ) : (
        <NavLink
          className={Styles.nav_item}
          to="/login"
          aria-label="Log in"
        >
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      )}
    </nav>
  );
}

export default NavBar