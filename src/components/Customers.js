import { Component } from 'react'
import CUSTOMER_DATA from '../data/CustomersData'
class Customers extends Component {
  render() {
    let customers = this.props.array || [...(CUSTOMER_DATA)]
    return <ul className={this.props.className}>
            {
              customers.map(customer => {
                return <li key={customer.id}>{customer.name}</li>
              })
            }
          </ul>
  }
}

export default Customers 