import UserInformation from "./UserInformation";
import { Resume } from "./Resume";
import { useState } from "react";
import { v1 as uuid } from "uuid";
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

  const receiveData = (input, value, id) => {
    const filtered = educationalValues.filter(obj => obj.id === id).map(el => {
      return setEducational()
    })
    console.log(filtered)
  };
  const addMoreContent = (value) => {
    /*     if (value === "education") {

    } */
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
