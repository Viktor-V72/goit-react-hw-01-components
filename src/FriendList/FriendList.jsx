import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline }) => (
      <div>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </div>
    ))}
  </ul>
);

export default FriendList;
