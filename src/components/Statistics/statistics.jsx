import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.persentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      persentage: PropTypes.string,
    })
  ),
};
