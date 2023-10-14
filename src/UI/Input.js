function Input({ className='', type='text', placeholder='', foo, blur, focus }) {
  return (
    <input type={ type }
      className={className}
      placeholder={placeholder}
      onChange={foo}
      onFocus={focus}
      onBlur={blur}
    />
  )
}
export default Input