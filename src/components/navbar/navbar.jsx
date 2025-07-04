import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout, checkLocalStorageToken } from "../../redux/authSlice";
import { useEffect } from "react";

import Styles from "./navbar.module.scss";

function NavBar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth.isAuthenticated;

  useEffect(() => {
    dispatch(checkLocalStorageToken());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={Styles.nav_container}>
      {isAuthenticated ? (
        <>
          <NavLink className={Styles.nav_item} to="/profile">
            <i className="fa fa-user-circle"></i>


            {auth.userName?.split(' ')[0]}
          </NavLink>
          <NavLink className={Styles.nav_item} onClick={handleLogout} to="/">
            <i className="fa fa-sign-out"></i> Sign Out
          </NavLink>
        </>
      ) : (
        <NavLink className={Styles.nav_item} to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      )}
    </nav>

  );
}

export default NavBar