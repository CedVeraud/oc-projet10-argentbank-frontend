import Styles from "./transactioncard.module.scss";

function TransactionCard({ transactions }) {
  return (
    <div>
      {transactions.map((transaction, index) => (
        <section key={index} className={Styles.account}>
          <div className={Styles.account_wrapper}>
            <h3 className={Styles.account_title}>{transaction.title}</h3>
            <p className={Styles.account_amount}>{transaction.solde}</p>
            <p className={Styles.account_description}>
              {transaction.description}
            </p>
          </div>
          <div className={Styles.account_wrapper & Styles.cta}>
            <button className={Styles.transaction_button}>{transaction.text}</button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default TransactionCard;