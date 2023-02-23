import PropTypes from 'prop-types'
import { List } from './FriendList.styled'
import { FriendListItem } from './FriendListItem'

export const FriendList = ({friends}) =>{
   return <List className="friend-list">
    {friends.map(friend => {
        return <FriendListItem key ={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
    })}
   </List>
}
FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}