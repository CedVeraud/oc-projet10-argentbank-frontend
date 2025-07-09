import { useDispatch, useSelector } from "react-redux";
import { showEditUserName } from "../../redux/authSlice";

import TransactionsData from "../../data/transactions.json";
import TransactionCard from "../../components/transactions/transactionCard";
import EditForm from "../../components/forms/user/editUserForm";

import Styles from "./profile.module.scss";

function Profile() {
  const auth = useSelector((state) => state.auth);  // récupére le state auth global depuis le store
  const showForm = useSelector((state) => state.auth.showForm); // Permet de savoir si le formulaire doit être affiché
  const dispatch = useDispatch();

  // Au clic sur le bouton "Edit", on déclenche l'affichage du formulaire
  const handleSubmit = () => {
    dispatch(showEditUserName());
  };

  const transactions = TransactionsData; // Appelle le mock local pour simuler les données de transactions

  return (
    <main className={Styles.user_page}>
      <div className={Styles.header}>
        {showForm ? (
          <div className={Styles.edit_container}>
            <h2>Edit user info</h2>
            <EditForm />
          </div>
        ) : (
          <>
            <h1 tabIndex="-1">
              Welcome back
              <br />
              {auth.userName || "Loading..."}
            </h1>
            <button onClick={handleSubmit} className={Styles.edit_button}>
              Edit Name
            </button>
          </>
        )}
      </div>
      <TransactionCard transactions={transactions} />
    </main>
  );
}

export default Profile;