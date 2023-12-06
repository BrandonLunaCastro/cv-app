import UserInformation from "./UserInformation";
import { Resume } from "./Resume";
import { useState } from "react";
import { v1 as uuid } from "uuid";
import { createNewArray } from "../helpers/createNewArray";
const Container = () => {
  const [dataInfo, setDataInfo] = useState({
    name: "",
    surname: "",
    email: "",
    telephone: "",
    location: "",
    social: "",
    description: "",
  });
  const [educationalValues, setEducational] = useState([
    {
      school: "",
      title: "",
      dateStart: "",
      dateEnd: "",
      id: uuid(),
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
    },
  ]);

  const receiveDataUser = (input, value) => {
    setDataInfo({ ...dataInfo, [input]: value });
  };

  const receiveData = (input, value, id, component) => {
    if (!component) return;
    if (component !== "education") return;
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
      };
      setProfessional(professionalValues.concat(newObject));
    }
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
      />
      <Resume />
    </section>
  );
};

export default Container;
