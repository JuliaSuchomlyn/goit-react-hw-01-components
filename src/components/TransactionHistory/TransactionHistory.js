
import PropTypes from 'prop-types'
import {  TransactionTable, Tablebody, TableLine, TableCell} from './TransactionHistory.styled'


export const TransactionHistory = ({items}) => {
    return <TransactionTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <Tablebody>
          {items.map(({id, type, amount, currency}) => {
            return(
              <TableLine key={id}>
                <TableCell>{type}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell>{currency}</TableCell>
            </TableLine>
            )
          })}

        </Tablebody>
  </TransactionTable>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  )
}