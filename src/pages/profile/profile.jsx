import { useDispatch, useSelector } from "react-redux";
import { showEditUserName } from "../../redux/authSlice";

import TransactionsData from "../../data/transactions.json";
import TransactionCard from "../../components/transactions/transactionCard";
import EditForm from "../../components/forms/user/editUserForm";

import Styles from "./profile.module.scss";

function Profile() {
  const auth = useSelector((state) => state.auth);
  const showForm = useSelector((state) => state.auth.showForm);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(showEditUserName());
  };

  const transactions = TransactionsData;

  return (
    <>
      {
        <main className={Styles.user_page}>
          <div className={Styles.header}>
            {showForm ? (
              <div className={Styles.edit_container}>
                <h2>Edit user info</h2>
                <EditForm />
              </div>
            ) : (
              <>
                <h1>
                  Welcome back
                  <br />
                  {auth.userName}
                </h1>
                <button onClick={handleSubmit} className={Styles.edit_button}>
                  Edit Name
                </button>
              </>
            )}
          </div>
          <TransactionCard transactions={transactions} />
        </main>
      }
    </>
  );
}

export default Profile;