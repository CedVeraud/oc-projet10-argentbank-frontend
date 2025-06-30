import { NavLink } from 'react-router-dom'
import NavBar from '../../components/navbar/navbar'

import logo from '../../assets/img/argentBankLogo.webp'
import Styles from "./header.module.scss";

function Header() {
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