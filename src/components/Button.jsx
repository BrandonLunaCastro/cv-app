function Button({type,text,onFunction = () => {return},className }) {
  return (
    <button type={type} onClick={onFunction} className={className} >{text}</button>
  )
}

export default Button