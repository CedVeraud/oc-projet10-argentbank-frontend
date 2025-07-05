import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, profile } from "../../../redux/authActions";
import { useNavigate } from "react-router-dom";

import Styles from "./signinform.module.scss";

function LoginForm() {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password, rememberMe }));
  };

  useEffect(() => {
    if (auth.token && !auth.error) {
      navigate("/profile");
      dispatch(profile());
    }
  }, [auth, dispatch, navigate]);

  return (
    <>
      <form onSubmit={handleSubmit} className={Styles.signin_form}>
        <div className={Styles.input_wrapper}>
          <label htmlFor="email">Username</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className={Styles.input_wrapper}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
      {auth.error && <p className={Styles.error_message}>{auth.error}</p>}
    </>
  );
}

export default LoginForm