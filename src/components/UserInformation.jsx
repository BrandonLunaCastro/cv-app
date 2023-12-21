import { useState } from "react";
import Education from "./Education";
import GeneralInformation from "./GeneralInformation";
import Professional from "./Professional";
import Button from "./Button";
import "../styles/UserInformation.css";
import lineUp from "../assets/up.svg";
import lineDown from "../assets/down.svg";

const UserInformation = ({
  dataInfo,
  educationalValues,
  professionalValues,
  receiveDataUser,
  receiveData,
  addMoreContent,
  deleteContent,
  changeState,
  changeImage,
}) => {
  const [show, setShow] = useState(0);
  const handleClick = (val) => {
    if (val === show) {
      return setShow(-1);
    }
    setShow(val);
  };

  const SubmitEducation = (e) => {
    e.preventDefault();
    changeState("education", true);
  };
  const EditEducation = () => {
    changeState("education", false);
  };
  const submitProfession = (e) => {
    e.preventDefault();
    changeState("profession", true);
  };
  const EditProfession = () => {
    changeState("profession", false);
  };
  const addSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="14"
      viewBox="0 0 448 512"
    >
      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
    </svg>
  );
  return (
    <section className="content__information">
      <article className="content__editable">
        <div>
          <p>
            <b>GeneralInformation</b>
          </p>
          <button className="line__down" onClick={() => handleClick(0)}>
            <img src={show === 0 ? lineUp : lineDown} alt="line down icon"></img>  
          </button>
        </div>
        {show === 0 && (
          <GeneralInformation
            dataInfo={dataInfo}
            receiveDataUser={receiveDataUser}
            changeState={changeState}
            changeImage={changeImage}
          />
        )}
      </article>
      <article className="content__editable">
        <div>
          <p>
            <b>Educational</b>
          </p>
          <button className="line__down" onClick={() => handleClick(1)}>
            <img src={show === 1 ? lineUp : lineDown} alt="line down icon" ></img>
          </button>
        </div>
        {show === 1 && (
          <form onSubmit={SubmitEducation}>
            {educationalValues.map((value) => {
              return (
                <div key={value.id} className="container__education">
                  <button
                      className="delete"
                    onClick={() => deleteContent("education", value.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </button>
                  <Education
                    values={value}
                    receiveData={receiveData}
                    key={value.id}
                  />
                </div>
              );
            })}
            <article className="buttons">
              <Button
                onFunction={() => addMoreContent("education")}
                element={addSvg}
                className="add__more"
              />
              <div>
                <Button type={"submit"} text={"safe"} className={"safe"}/>
                <Button
                  type={"button"}
                  text={"edit"}
                  onFunction={EditEducation}
                  className={"edit"}
                />
              </div>
            </article>
          </form>
        )}
      </article>
      <article className="content__editable">
        <div>
          <p>
            <b>Professional Experience</b>
          </p>
          <button  className="line__down" onClick={() => handleClick(2)}>
            <img src={show === 2 ? lineUp : lineDown} alt="line down icon"></img>
          </button>
        </div>
        {show === 2 && (
          <form onSubmit={submitProfession} className="profession__form">
            {professionalValues.map((value) => {
              return (
                <div key={value.id}>
                  <button
                    className="delete"
                    onClick={() => deleteContent("profession", value.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </button>
                  <Professional
                    value={value}
                    receiveData={receiveData}
                    key={value.id}
                  />
                </div>
              );
            })}
            <article className="buttons">
              <Button
                onFunction={() => addMoreContent("profession")}
                element={addSvg}
                className="add__more"
              />
              <div>
                <Button type={"submit"} text={"safe"} className={"safe"}/>
                <Button
                  type={"button"}
                  text={"edit"}
                  onFunction={EditProfession}
                  className={"edit"}
                />
              </div>
            </article>
          </form>
        )}
      </article>
    </section>
  );
};

export default UserInformation;
