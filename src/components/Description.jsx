export const Description = ({
  name = "input",
  text = "description",
  state = false,
  onFunction = () => {},
  value,
}) => {
  return (
    <label>
      {text}:
      <textarea
        name={name}
        disabled={state}
        onChange={onFunction}
        value={value}
      ></textarea>
    </label>
  );
};
