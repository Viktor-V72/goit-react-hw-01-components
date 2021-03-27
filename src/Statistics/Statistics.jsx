import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul>
      {stats.map(({ id, label, percentage }) => {
        const color = '#' + Math.random().toString(16).substr(2, 6);
        return (
          <li key={id} className={styles.item}>
            <span className={styles.label} style={{ backgroundColor: color }}>
              {label}
            </span>
            <span
              className={styles.percentage}
              style={{ backgroundColor: color }}
            >
              {percentage}%
            </span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
  stats: [],
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
