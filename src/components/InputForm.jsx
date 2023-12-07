export const InputForm = ({
  name,
  text = "input",
  type = "text",
  onFunction,
  value = "",
  state = false
}) => {
  return (
    <label> 
      {text}:
      <input
        type={type}
        name={name}
        id={name}
        onChange={onFunction}
        value={value}
        disabled={state}
      ></input>
    </label>
  );
};
