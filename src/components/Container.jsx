import UserInformation from "./UserInformation";
import { Resume } from "./Resume";
import { useState, useRef } from "react";
import { v1 as uuid } from "uuid";
import { createNewArray } from "../helpers/createNewArray";
import { changeStateInput } from "../helpers/changeStateInput";
import { useReactToPrint } from "react-to-print";

const Container = () => {
  const [dataInfo, setDataInfo] = useState({
    name: "",
    surname: "",
    email: "",
    telephone: "",
    location: "",
    social: "",
    description: "",
    stateInputs: false,
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

  const receiveDataUser = (input, value) => {
    setDataInfo({ ...dataInfo, [input]: value });
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
        stateInputs: !educationalValues.length
          ? false
          : educationalValues.at(-1).stateInputs,
      };
      setEducational([...educationalValues, newObject]);
    }
    if (value === "profession") {
      const newObject = {
        company: "",
        position: "",
        responsibilities: "",
        dateStartWork: "",
        dateEndWork: "",
        id: uuid(),
        stateInputs: !professionalValues.length
          ? false
          : professionalValues.at(-1).stateInputs,
      };
      setProfessional([...professionalValues, newObject]);
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
  const changeState = (state, condition) => {
    let newState;
    if (state === "general") {
      setDataInfo({ ...dataInfo, stateInputs: condition });
    }
    if (state === "education") {
      newState = changeStateInput(educationalValues, "stateInputs", condition);
      setEducational(newState);
    }
    if (state === "profession") {
      newState = changeStateInput(professionalValues, "stateInputs", condition);
      setProfessional(newState);
    }
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <section className="container">
      <div>
        <UserInformation
          dataInfo={dataInfo}
          educationalValues={educationalValues}
          professionalValues={professionalValues}
          receiveDataUser={receiveDataUser}
          receiveData={receiveData}
          addMoreContent={addMoreContent}
          deleteContent={deleteContent}
          changeState={changeState}
        />
        <button onClick={handlePrint}>print PDF</button>
      </div>
      <Resume
        dataInfo={dataInfo}
        educationalValues={educationalValues}
        professionalValues={professionalValues}
        ref={componentRef}
      />
    </section>
  );
};

export default Container;
