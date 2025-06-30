import Styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <p className={Styles.footer_text}>Copyright 2020 Argent Bank</p>
    </footer>
  );
}

export default Footer