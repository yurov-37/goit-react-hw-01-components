import PropTypes from 'prop-types';
import {
  Profile,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileInfo,
  ProfileStats,
  ProfileLabel,
  ProfileQuantity,
} from './user-profile.styled';

const UserProfile = ({ avatar, name, tag, location, stats }) => {
  return (
    <Profile>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt={name} width="150" />
        <ProfileName>{name}</ProfileName>
        <ProfileInfo>{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </ProfileDescription>

      <ProfileStats>
        <li>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{stats.followers}</ProfileQuantity>
        </li>
        <li>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{stats.views}</ProfileQuantity>
        </li>
        <li>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{stats.likes}</ProfileQuantity>
        </li>
      </ProfileStats>
    </Profile>
  );
};

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserProfile;
