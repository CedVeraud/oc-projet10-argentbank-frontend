import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";

import { hideEditUserName } from "../../../redux/authSlice";
import { edit } from "../../../redux/authActions";

import Styles from "./edituserform.module.scss";

function EditForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const usernameRef = useRef(null); // gére le focus s’il y a une erreur
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // récupére le state auth global depuis le store

  useEffect(() => {
    if (auth.userName) {
      setUsername(auth.userName);
    }
  }, [auth.userName]);   // l'effet ne se déclenche que si auth.userName change

  // masque le formulaire (retour à l’état “affichage du userName”)
  const handleCancelClick = () => {
    dispatch(hideEditUserName());
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    // si username vide, affiche une erreur + focus sur le champ
    if (!username.trim()) {
      setError("Username can't be empty");
      usernameRef.current.focus();
      return;
    }
    // username OK
    setError("");
    dispatch(edit(username)); // envoie l’action d’édition avec le nouveau username
    dispatch(hideEditUserName()); // referme le formulaire après mise à jour
  };

  return (
    <div className={Styles.formedit_content}>
      <form>
        <div className={Styles.formedit_input_wrapper}>
          <label htmlFor="username">User name:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "username-error" : undefined}
            ref={usernameRef}
          />
        </div>
        {error && (
          <p id="username-error" role="alert" className={Styles.error_message}>
            {error}
          </p>
        )}

        <div className={Styles.formedit_input_wrapper}>
          <label htmlFor="firstname">First name:</label>
          <input
            className={Styles.blocked}
            type="text"
            id="firstname"
            value={auth.firstName}
            readOnly
            aria-readonly="true"
          />
        </div>

        <div className={Styles.formedit_input_wrapper}>
          <label htmlFor="lastname">Last name:</label>
          <input
            className={Styles.blocked}
            type="text"
            id="lastname"
            value={auth.lastName}
            readOnly
            aria-readonly="true"
          />
        </div>

        <div className={Styles.formedit_button_container}>
          <button
            onClick={handleSaveClick}
            className={Styles.formedit_button_save}
            type="submit"
          >
            Save
          </button>
          <button
            onClick={handleCancelClick}
            className={Styles.formedit_button_cancel}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
