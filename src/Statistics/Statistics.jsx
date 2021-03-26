import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul>
      {stats.map(({ id, label, percentage }) => {
        const color = '#' + Math.random().toString(16).substr(2, 6);
        return (
          <li key={id} className="item">
            <span className="label" style={{ backgroundColor: color }}>
              {label}
            </span>
            <span className="percentage" style={{ backgroundColor: color }}>
              {percentage}
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
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
