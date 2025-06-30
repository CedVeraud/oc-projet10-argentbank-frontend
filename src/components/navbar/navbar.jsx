import { NavLink } from 'react-router-dom'

import Styles from "./navbar.module.scss";

function NavBar() {
  return (
    <nav className={Styles.nav_container}>
      <NavLink to="/login" className={Styles.nav_item}>
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </nav>

  );
}

export default NavBar