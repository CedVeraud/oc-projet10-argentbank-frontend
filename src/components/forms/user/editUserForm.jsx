import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { hideEditUserName } from "../../../redux/authSlice";
import { edit } from "../../../redux/authActions";

import Styles from "./edituserform.module.scss";

function EditForm() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.userName) {
      setUsername(auth.userName);
    }
  }, [auth.userName]);

  const handleCancelClick = () => {
    dispatch(hideEditUserName());
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    dispatch(edit(username));
    dispatch(hideEditUserName());
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
          />
        </div>
        <div className={Styles.formedit_input_wrapper}>
          <label htmlFor="firstname">First name:</label>
          <input
            className={Styles.blocked}
            type="text"
            id="firstname"
            value={auth.firstName}
            readOnly
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
          <button onClick={handleCancelClick} className={Styles.formedit_button_cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;