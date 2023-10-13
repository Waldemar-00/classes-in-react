import styles from './App.module.css' 
import Button from './UI/Button'
import Customers from './components/Customers'
import { Component } from 'react'
class App extends Component {
  constructor() {
    super()
    this.state = {
      hiding: false,
    }
  }
  toggleHiding() {
    this.setState((state) => {
      return { hiding: !state.hiding}
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
          {
            this.state.hiding && <Customers className={styles.customers} />
          }
        </div>
      ) 
    }
}

export default App 
