function Button({ children, foo }) {
  return (
    <button onClick={foo}>{children}</button>
  )
}
export default Button