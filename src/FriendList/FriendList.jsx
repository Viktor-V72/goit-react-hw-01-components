import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ avatar, name, isOnline }) => (
      <div>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </div>
    ))}
  </ul>
);

export default FriendList;
