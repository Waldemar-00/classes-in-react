import { createContext } from "react"
const CustomersContext = createContext({
  customers: [
    {
      id: 'Helen',
      name: 'Helen'
    },
    {
      id: 'Mike',
      name: 'Mikle'
    },
    {
      id: 'Briana',
      name: 'Briana'
    },
    {
      id: 'Hanna',
      name: 'Hanna'
    }
  ]
})
export default CustomersContext