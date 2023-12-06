export const Description = ({
  name = "input",
  text = "description",
  onFunction,
  value = "",
}) => {
  return (
    <label>
      {text}:
      <textarea onChange={onFunction} name={name} value={value}></textarea>
    </label>
  );
};
