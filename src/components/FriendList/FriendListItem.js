import PropTypes from 'prop-types'
import { Card, Indicator, Title } from './FriendListItem.styled'

export const FriendListItem = ({avatar,name,isOnline}) =>{
    return (
        <Card className="item">
            <Indicator className="status" isOnline={isOnline}></Indicator>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <Title className="name">{name}</Title>
        </Card>
    )
}
FriendListItem.propTypes ={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,

}