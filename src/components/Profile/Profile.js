import PropTypes from 'prop-types'
import { Card, Description, List, Name ,Item,Span} from './Profile.styled'

export const Profile = ({userName,tag,location,avatar,stats}) => {
    return <Card className="profile">
    <Description className="description">
      <img
        src={avatar}
        alt={userName}
        width='100'
        className="avatar"
      />
      <Name className="name">{userName}</Name>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </Description>
  
    <List className="stats">
      <Item>
        <span className="label">Followers</span>
        <Span className="quantity">{stats.followers}</Span>
      </Item>
      <Item>
        <span className="label">Views</span>
        <Span className="quantity">{stats.views}</Span>
      </Item>
      <Item>
        <span className="label">Likes</span>
        <Span className="quantity">{stats.likes}</Span>
      </Item>
    </List>
  </Card>
}
Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}