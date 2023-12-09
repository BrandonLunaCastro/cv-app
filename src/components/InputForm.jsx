export const InputForm = ({
  name,
  text = "input",
  type = "text",
  state = false
}) => {
  return (
    <label> 
      {text}:
      <input
        type={type}
        name={name}
        id={name}
        disabled={state}
      ></input>
    </label>
  );
};
