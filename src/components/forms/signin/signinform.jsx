import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../../store/auth/authActions";

import Styles from "./SignInForm.module.scss";

function LoginForm() {
  // États locaux pour les champs du formulaire
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // "Remember me" décoché par défaut
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Accès à l’état global d’authentification
  const auth = useSelector((state) => state.auth);

  // Soumission du formulaire : déclenche la tentative de login
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password, rememberMe }));
  };

  // Effet déclenché quand le token est présent et sans erreur
  useEffect(() => {
    if (auth.token && !auth.error) {
      navigate("/profile"); // redirection après connexion réussie
    }
  }, [auth, dispatch, navigate]);

  return (
    <>
      <form onSubmit={handleSubmit} className={Styles.signin_form}>
        <div className={Styles.input_wrapper}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            aria-invalid={!!auth.error}
            aria-describedby={auth.error ? "email-error" : undefined}
            aria-required="true"
          />
        </div>
        <div className={Styles.input_wrapper}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={!!auth.error}
            aria-describedby={auth.error ? "email-error" : undefined}
            aria-required="true"
          />
        </div>
        <div className={Styles.input_remember}>
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className={Styles.signin_button}>
          Sign In
        </button>
      </form>
      {auth.error && (
        <p
          id="email-error"
          className={Styles.error_message}
          role="alert"
        >
          {auth.error}
        </p>
      )}
    </>
  );
}

export default LoginForm