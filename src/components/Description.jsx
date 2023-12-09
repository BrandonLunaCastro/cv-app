export const Description = ({
  name = "input",
  text = "description",
  state = false,
}) => {
  return (
    <label>
      {text}:
      <textarea
        name={name}
        disabled={state}
      ></textarea>
    </label>
  );
};
