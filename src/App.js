import styles from './App.module.css' 
import Button from './UI/Button'
import Input from './UI/Input'
import Customers from './components/Customers'
import CustomersContext from './data/CustomersContext'
import { Component } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
class App extends Component {
  static contextType = CustomersContext
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
        filtered: state.filtered = (this.context.customers)
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
    // console.log(this.context.customers)
    // fetch('URL')
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
      <ErrorBoundary>
        <CustomersContext.Provider value={this.context}>
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
          </CustomersContext.Provider>
      </ErrorBoundary>
      ) 
    }
}

export default App 
