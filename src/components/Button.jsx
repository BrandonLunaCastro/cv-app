function Button({
  type = "button",
  text = "",
  onFunction = () => {
    return;
  },
  className,
  element = ""
}) {
  return (
    <button type={type} onClick={onFunction} className={className}>
      {text}
      {element}
    </button>
  );
}

export default Button;
