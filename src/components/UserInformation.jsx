import { useState } from "react";
import Education from "./Education";
import GeneralInformation from "./GeneralInformation";
import Professional from "./Professional";

const UserInformation = ({
  dataInfo,
  educationalValues,
  professionalValues,
  receiveDataUser,
  receiveData,
  addMoreContent,
}) => {
  const [show, setShow] = useState(0);
  const handleClick = (val) => {
    if (val === show) {
      return setShow(-1);
    }
    setShow(val);
  };
  const handleAdd = () => {
    addMoreContent;
  };

  return (
    <section className="content">
      <article className="content__editable">
        <div>
          <p>
            <b>GeneralInformation</b>
          </p>
          <button onClick={() => handleClick(0)}>+</button>
        </div>
        {show === 0 && (
          <GeneralInformation
            dataInfo={dataInfo}
            receiveDataUser={receiveDataUser}
          />
        )}
      </article>
      <article className="content__editable">
        <div>
          <p>
            <b>Educational</b>
          </p>
          <button onClick={() => handleClick(1)}>+</button>
        </div>
        {show === 1 && (
          <>
            {educationalValues.map((value) => {
              return (
                <Education
                  values={value}
                  receiveData={receiveData}
                  key={value.uuid}
                />
              );
            })}
            <button onClick={handleAdd}>Add more</button>
          </>
        )}
      </article>
      <article className="content__editable">
        <div>
          <p>
            <b>ProfessionalExperience</b>
          </p>
          <button onClick={() => handleClick(2)}>+</button>
        </div>
        {show === 2 && (
          <Professional data={professionalValues} receiveData={receiveData} />
        )}
      </article>
    </section>
  );
};

export default UserInformation;
