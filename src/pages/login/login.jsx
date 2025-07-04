import SignInForm from "../../components/forms/signin/signinForm";

import Styles from "./login.module.scss";

function Login() {
  return (
    <main className={Styles.login_page}>
      <section className={Styles.signin_content}>
        <div className={Styles.signin_icon}>
          <i className={"fa fa-user-circle"}></i>
        </div>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  );
}

export default Login