import styles from './App.module.css' 
import Button from './UI/Button'
import Input from './UI/Input'
import Customers from './components/Customers'
import CUSTOMER_DATA from './data/CustomersData'
import { Component } from 'react'
class App extends Component {
  constructor() {
    super()
    this.state = {
      hiding: false,
      value: '',
      filtered: null
    }
  }
  toggleHiding() {
    this.setState((state) => {
      return { hiding: !state.hiding}
    })
  }
  filterCustomers() {
    this.setState((state) => {
      return {
        filtered: state.filtered = (CUSTOMER_DATA)
          .filter(customer => customer.name.toLowerCase()
            .includes(this.state.value.toLowerCase()))
      }
    })
  }
  focus() {
    this.setState((state) => {
      return {hiding: state.hiding = true}
    })
  }
  blur() {
    this.setState((state) => {
      return { hiding: state.hiding = true }
    })
    this.setState((state) => {
      return {
        filtered: state.filtered = null
      }
    })
  }
  changeValue(e) {
    this.setState((state) => {
      return { value: state.value = e.target.value }
    })
    this.filterCustomers()
  }

  // componentDidMount() {
  //fetch('URL')
  // }
  // componentDidUpdate(prevProps, prevState) {
    // if(prevProps !== this.state.value){}
  //}
  componentWillUnmount() {
    this.setState((state) => {
      return { hiding: state.hiding = false } 
    })
    this.setState((state) => {
      return { filtered: state.filtered = null }
    })
  }
  render() {
      return (
        <div className={styles.App}>
          <header className={styles['App-header']}>
            <h1>Hi, Classes, in Recat!</h1>
          </header>
          <Button className={styles.button}
            foo={this.toggleHiding.bind(this)}
          >Toggle customer hiding</Button>
          <Input className={styles.input}
            type='text'
            placeholder='Customer Filter'
            blur={this.blur.bind(this)}
            focus={this.focus.bind(this)}
            foo={this.changeValue.bind(this)}
            value={(e) => this.changeValue(e).bind(this)}
          />
          {
            this.state.hiding &&
            <Customers
              className={styles.customers}
              array={this.state.filtered}
            />
          }
        </div>
      ) 
    }
}

export default App 
