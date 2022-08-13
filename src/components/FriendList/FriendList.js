import PropTypes from 'prop-types'
import { FriendsCatalogue, FriendsItem, Status, Avatar, Name } from './FriendList.styled'



export const FriendList = ({friends}) => {
    return <FriendsCatalogue>
              {friends.map(({avatar, name, isOnline, id}) => {
                return(
                  <FriendsItem key={id}>
                    <Status status={isOnline}/>
                    <Avatar src={avatar} alt="User avatar" width="48"></Avatar>
                    <Name>{name}</Name>
                  </FriendsItem>
                )
              })}

            </FriendsCatalogue>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.numberisRequired,
    })
  )
}