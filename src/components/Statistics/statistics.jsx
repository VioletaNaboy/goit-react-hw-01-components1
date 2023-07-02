import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const colors = [
  'cornflowerblue',
  'coral',
  'violet',
  'blue',
  'cyan',
  'darkcyan',
];

const usedColors = [];

function getRandomColor() {
  let availableColors = colors.filter(color => !usedColors.includes(color));

  if (availableColors.length === 0) {
    usedColors.length = 0;
    availableColors = colors;
  }

  const randomIndex = Math.floor(Math.random() * availableColors.length);
  const randomColor = availableColors[randomIndex];

  usedColors.push(randomColor);

  return randomColor;
}
export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(stat => (
        <li
          className={css.item}
          key={stat.id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
