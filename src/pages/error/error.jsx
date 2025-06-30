import Styles from "./error.module.scss";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <section className={Styles.errorPage}>
      <h1>Error 404</h1>

      <NavLink to="/">
        <p>Back to the homepage</p>
      </NavLink>
    </section>
  );
}

export default ErrorPage