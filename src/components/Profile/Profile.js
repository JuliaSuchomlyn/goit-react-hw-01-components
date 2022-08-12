
import PropTypes from 'prop-types';
import {Avatar, Container, Description, StatsItem, StatsLabel, StatsQuantity, UserLocation, UserName, Stats, UserTag} from './Profile.styled'


export const Profile = ({ username, tag, location, avatar, stats}) => {
    return <Container>
              <Description>
                <Avatar
                  src={avatar}
                  alt="User avatar"
                />
                <UserName>{username}</UserName>
                <UserTag>{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
              </Description>
            
              <Stats>
            
                <StatsItem>
                  <StatsLabel>Followers</StatsLabel>
                  <StatsQuantity>{stats.followers}</StatsQuantity>
                </StatsItem>

                <StatsItem>
                  <StatsLabel>Views</StatsLabel>
                  <StatsQuantity>{stats.views}</StatsQuantity>
                </StatsItem>

                <StatsItem>
                  <StatsLabel>Likes</StatsLabel>
                  <StatsQuantity>{stats.likes}</StatsQuantity>
                </StatsItem>

              </Stats>

          </Container>
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}
