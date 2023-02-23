import PropTypes from 'prop-types'
import { Table, Td, Th, Tr } from './TransactionHistory.styled'
export const TransactionHistory = ({items}) =>{
    return (
        <Table className="transaction-history">

  <thead>
    <Tr>
      <Th className='th'>Type</Th>
      <Th className='th'>Amount</Th>
      <Th className='th'>Currency</Th>
    </Tr>
  </thead>

  <tbody>
    {items.map(({type,id,amount,currency})=> {
        return(
         <Tr key={id}>
         <Td>{type}</Td>
         <Td>{amount}</Td>
         <Td>{currency}</Td>
       </Tr>
        )
    })}

  </tbody>
        </Table>    
    )
}
TransactionHistory.propTypes ={
    items:PropTypes.array.isRequired
}