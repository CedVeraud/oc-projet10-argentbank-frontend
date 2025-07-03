import TransactionsData from "../../data/transactions.json";
import TransactionCard from "../../components/transactions/transactioncard";

import Styles from "./profile.module.scss";

function Profile() {
  const transactions = TransactionsData;

  return (
    <main className={Styles.user_page}>
      <div className={Styles.header}>
        <div className={Styles.edit_container}>
          <h2>Edit user info</h2>
          <p> - User Form - </p>
        </div>

        <h1>
          Welcome back
          <br />
          - User Name -
        </h1>
        <button className={Styles.edit_button}>
          Edit Name
        </button>

      </div>
      <TransactionCard transactions={transactions} />
    </main>
  )
}

export default Profile;