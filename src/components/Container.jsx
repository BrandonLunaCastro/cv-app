import UserInformation from "./UserInformation";
import { Resume } from "./Resume";
import { useState } from "react";
import { v1 as uuid } from "uuid";
import { createNewArray } from "../helpers/createNewArray";
import { changeStateInput } from "../helpers/changeStateInput";

const Container = () => {
  const [dataInfo, setDataInfo] = useState({
    name: "",
    surname: "",
    email: "",
    telephone: "",
    location: "",
    social: "",
    description: "",
    stateInputs: false
  });
  const [educationalValues, setEducational] = useState([
    {
      school: "",
      title: "",
      dateStart: "",
      dateEnd: "",
      id: uuid(),
      stateInputs: false,
    },
  ]);
  const [professionalValues, setProfessional] = useState([
    {
      company: "",
      position: "",
      responsibilities: "",
      dateStartWork: "",
      dateEndWork: "",
      id: uuid(),
      stateInputs: false,
    },
  ]);

  const receiveDataUser = (object) => {
    console.log(object)
    setDataInfo({...object, stateInputs: true})
    /* setDataInfo({ ...dataInfo, [input]: value }); */
  };

  const receiveData = (input, value, id, component) => {
    if (!component) return;
    if (component === "education") {
      const newArray = createNewArray(educationalValues, input, value, id);
      setEducational(newArray);
    }
    if (component === "profession") {
      const newArray = createNewArray(professionalValues, input, value, id);
      setProfessional(newArray);
    }
  };
  const addMoreContent = (value) => {
    if (!value) return;
    if (value === "education") {
      const newObject = {
        school: "",
        title: "",
        dateStart: "",
        dateEnd: "",
        id: uuid(),
        stateInputs: false,
      };
      setEducational(educationalValues.concat(newObject));
    }
    if (value === "profession") {
      const newObject = {
        company: "",
        position: "",
        responsibilities: "",
        dateStartWork: "",
        dateEndWork: "",
        id: uuid(),
        stateInputs: false,
      };
      setProfessional(professionalValues.concat(newObject));
    }
  };

  const deleteContent = (value, id) => {
    if (value === "profession") {
      const filtered = professionalValues.filter(
        (element) => element.id !== id
      );
      setProfessional(filtered);
    }
    if (value === "education") {
      const filtered = educationalValues.filter((element) => element.id !== id);
      setEducational(filtered);
    }
  };

  const handleInputState = (element, state = "") => {
    let actualState;
    let setValue;
    let newState;
    if (!state || !element) return;
    if (state === "profession") {
      actualState = professionalValues;
      setValue = setProfessional;
    }
    if (state === "education") {
      actualState = educationalValues;
      setValue = setEducational;
    }
    if (element === "safe") {
      newState = changeStateInput(actualState, "stateInputs", true);
    } else {
      newState = changeStateInput(actualState, "stateInputs", false);
    }
    setValue(newState);
  };
  return (
    <section className="container">
      <UserInformation
        dataInfo={dataInfo}
        educationalValues={educationalValues}
        professionalValues={professionalValues}
        receiveDataUser={receiveDataUser}
        receiveData={receiveData}
        addMoreContent={addMoreContent}
        deleteContent={deleteContent}
        handleInputState={handleInputState}
      />
      <Resume
        dataInfo={dataInfo}
        educationalValues={educationalValues}
        professionalValues={professionalValues}
      />
    </section>
  );
};

export default Container;
