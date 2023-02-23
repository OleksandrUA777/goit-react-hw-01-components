import PropTypes from 'prop-types'
import { DataList, List, Section, Percentage } from './Statistics.styled'

export const Statistics = ({title,stats}) => {
    return (
<Section className="statistics">
    {title && <h2 className="title">Upload stats</h2> }
    <List className="stat-list">
    {stats.map(stat => {
        return <DataList key ={stat.id} className="item">
        <span className="label">{stat.label}</span>
        <Percentage className="percentage">{stat.percentage}%</Percentage>
      </DataList>
     })}
    </List>
</Section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}