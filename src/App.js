import styles from './App.module.css' 
import Button from './UI/Button'
import Customers from './components/Customers'
import { useState } from 'react'
function App() {
  const [hiding, setHiding] = useState(false)
  function toggleHiding() {
    setHiding(hiding => !hiding)
  }
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <h1>Hi, Classes, in Recat!</h1>
      </header>
      <Button className={styles.button}
        foo={toggleHiding}
      >Toggle customer hiding</Button>
      {
        hiding && <Customers className={styles.customers} />
      }
    </div>
  ) 
}

export default App 
