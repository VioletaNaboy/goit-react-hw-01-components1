import PropTypes from 'prop-types';
import css from './Profile.module.css';
export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      {Object.entries(stats).map(([key, value]) => (
        <li key={key}>
          <span className={css.stat}>{key}</span>
          <span className={css.value}>{value}</span>
        </li>
      ))}
    </ul>
  </div>
);
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
