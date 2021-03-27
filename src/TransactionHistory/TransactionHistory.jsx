import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const transactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr className={styles.title}>
          <th className={styles.title_name}>Type</th>
          <th className={styles.title_name}>Amount</th>
          <th className={styles.title_name}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={styles.item} key={id}>
            <td className={styles.item_el}>{type}</td>
            <td className={styles.item_el}>{amount}</td>
            <td className={styles.item_el}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

transactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default transactionHistory;
