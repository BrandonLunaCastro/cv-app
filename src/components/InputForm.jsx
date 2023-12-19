export const InputForm = ({
  name,
  text = "input",
  type = "text",
  state = false,
  onFunction,
  value
}) => {
  return (
    <label className={name}> 
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
