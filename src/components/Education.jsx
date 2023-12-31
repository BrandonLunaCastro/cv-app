import { InputForm } from "./InputForm";
import "../styles/ShowEducation.css"

function Education({ values, receiveData }) {
  const handleChange = ({ target }) => {
    receiveData(target.name, target.value, values.id, "education");
  };
  return (
    <div className="show__education">
      <InputForm
        name={"school"}
        text={"School Name"}
        onFunction={handleChange}
        value={values.school}
        state={values.stateInputs}
        className={"label__school"}
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
        text={"From"}
        type={"date"}
        onFunction={handleChange}
        value={values.dateStart}
        state={values.stateInputs}
      />
      <InputForm
        name={"dateEnd"}
        text={"To"}
        type={"date"}
        onFunction={handleChange}
        value={values.dateEnd}
        state={values.stateInputs}
      />
    </div>
  );
}

export default Education;
