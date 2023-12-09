function Button({type,text,onFunction = () => {return} }) {
  return (
    <button type={type} onClick={onFunction}>{text}</button>
  )
}

export default Button