export const Description = ({
  name = "input",
  text = "description",
  onFunction,
  value = "",
  state = false,
}) => {
  return (
    <label>
      {text}:
      <textarea
        onChange={onFunction}
        name={name}
        value={value}
        disabled={state}
      ></textarea>
    </label>
  );
};
