export const Description = ({
  name = "input",
  text = "description",
  state = false,
  onFunction = () => {},
  value,
}) => {
  return (
    <label className={name}>
      {text}:
      <textarea
        name={name}
        disabled={state}
        onChange={onFunction}
        value={value}
        id={name}
      ></textarea>
    </label>
  );
};
