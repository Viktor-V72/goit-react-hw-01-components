import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import defaultImage from '../Profile/image.jpg';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? styles.online : styles.offline;
  return (
    <li className="item">
      <span className={status}>{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
