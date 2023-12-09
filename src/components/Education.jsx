import { InputForm } from "./InputForm";
import Button from "./Button";

/* const handleSubmit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target))
  console.log(data)
}; */

function Education({ values, receiveData }) {
  const handleChange = ({ target }) => {
    receiveData(target.name, target.value, values.id, "education");
  };
  return (
    <>
      <InputForm
        name={"school"}
        text={"School Name"}
        onFunction={handleChange}
        value={values.school}
        state={values.stateInputs}
      />
      <InputForm
        name={"title"}
        text={"Title of study"}
        onFunction={handleChange}
        value={values.title}
        state={values.stateInputs}
      />
      <InputForm
        name={"dateStart"}
        text={"Date of start study"}
        type={"date"}
        onFunction={handleChange}
        value={values.dateStart}
        state={values.stateInputs}
      />
      <InputForm
        name={"dateEnd"}
        text={"Date of end study"}
        type={"date"}
        onFunction={handleChange}
        value={values.dateEnd}
        state={values.stateInputs}
      />
    </>
  );
}

export default Education;
