import { InputForm } from "./InputForm";

function Education({ values, receiveData }) {
  const handleChange = ({target}) => {
    receiveData(target.name, target.value , values.id)
  }

  return (
    <div>
      <InputForm
        name={"school"}
        text={"School Name"}
        onFunction={handleChange}
        value={values.school}
      />
      <InputForm
        name={"title"}
        text={"Title of study"}
        onFunction={handleChange}
        value={values.title}
      />
      <InputForm
        name={"dateStart"}
        text={"Date of start study"}
        type={"date"}
        onFunction={handleChange}
        value={values.dateStart}
      />
      <InputForm
        name={"dateEnd"}
        text={"Date of end study"}
        type={"date"}
        onFunction={handleChange}
        value={values.dateEnd}
      />
    </div>
  );
}

export default Education;
