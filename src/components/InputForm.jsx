export const InputForm = ({
  name,
  text = "input",
  type = "text",
  state = false,
  onFunction,
  value,
  className = name

}) => {
  return (
    <label className={className}> 
      {text}:
      <input
        type={type}
        name={name}
        onChange={onFunction}
        disabled={state}
        value={value}
      ></input>
    </label>
  );
};
