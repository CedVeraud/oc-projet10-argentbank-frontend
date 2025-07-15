import { Link } from "react-router-dom";

import Styles from "./Error404.module.scss";
function Error404() {
  return (
    <main className={Styles.errorpage}>
      <div className={Styles.errorpage_content}>
        <span>Oups! Something went wrong</span>
        <h1 className={Styles.errorpage_title}>Error <span>404</span></h1>
        <p className={Styles.errorpage_message}>The page you're looking for does not exist.</p>
        <Link to="/" className={Styles.errorpage_link}>
          <p>Please go back to the homepage</p>
        </Link>
      </div>
    </main>
  );
}

export default Error404