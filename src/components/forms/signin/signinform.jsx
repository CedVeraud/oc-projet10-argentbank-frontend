import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, profile } from "../../../redux/login/authActions";
import { useNavigate } from "react-router-dom";


import Styles from "./signinform.module.scss";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className={Styles.signin_button}>
          Sign In
        </button>
      </form>
      {auth.error && <p>{auth.error}</p>}
    </>
  );
}

export default LoginForm