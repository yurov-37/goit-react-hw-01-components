import PropTypes from 'prop-types';
import {
  Friend,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './friends-list-item.styled';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
