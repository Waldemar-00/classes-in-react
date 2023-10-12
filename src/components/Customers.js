import CUSTOMER_DATA from '../data/CustomersData'
function Customers({ className }) {
  const customers = [...(CUSTOMER_DATA())]
  return(
    <ul className={className}>
      {
        customers.map(customer => {
          return <li key={customer.id}>{customer.name}</li>
        })
      }
    </ul>
  )
}
export default Customers 