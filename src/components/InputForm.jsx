export const InputForm = ({
  name,
  text = "input",
  type = "text",
  state = false,
  onFunction,
  value
}) => {
  return (
    <label> 
      {text}:
      <input
        type={type}
        name={name}
        id={name}
        onChange={onFunction}
        disabled={state}
        value={value}
      ></input>
    </label>
  );
};
