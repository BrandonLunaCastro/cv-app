export const InputForm = ({
  name,
  text = "input",
  type = "text",
  onFunction,
  value = "",
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
      ></input>
    </label>
  );
};
