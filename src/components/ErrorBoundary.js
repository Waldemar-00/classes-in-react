import { Component } from 'react'
class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = {isError: false}
  }
  componentDidCatch(error) {
    console.log(error)
    this.setState({isError: true})
  }
  render() {
    if (this.state.isError) {
      return (
        <p>SOMTHING WRONG!!!</p> //forexemple
      )
    }
    return (
      this.props.children
    )
  }
}
export default ErrorBoundary