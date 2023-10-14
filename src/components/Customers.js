import { Component } from 'react'
import CustomersContext from '../data/CustomersContext'
class Customers extends Component {
  static contextType = CustomersContext
  render() {
    let customers = this.props.array || [...(this.context.customers)]
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