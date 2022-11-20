import PropTypes from 'prop-types';
import FriendsListItem from '../Friends-List/friends-list-item.jsx';
import { List } from './friends-list.styled.jsx';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendsListItem
          avatar={avatar}
          name={name}
          key={id}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
