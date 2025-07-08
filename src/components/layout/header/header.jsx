import { NavLink } from 'react-router-dom'
import NavBar from '../../navbar/navbar'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { profile } from "../../../redux/authActions";


import logo from '../../../assets/img/argentBankLogo.webp'
import Styles from "./header.module.scss";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.token && !auth.error) {
      dispatch(profile());  // chargement des infos utilisateur
    }
  }, [auth, dispatch]);

  return (
    <header className={Styles.header}>
      <NavLink to="/" className={Styles.logo}>
        <img
          src={logo}
          alt="Argent Bank Logo"
          className={Styles.logo_img}
        />
        <div className="sr-only">Argent Bank</div>
      </NavLink>

      <NavBar />
    </header >
  );
}

export default Header