import { Description } from "./Description";
import { InputForm } from "./InputForm";
import Button from "./Button";
import "../styles/GeneralInformation.css";  

export default function GeneralInformation({
  dataInfo,
  receiveDataUser,
  changeState,
  changeImage
}) {
  const handleEdit = () => {
    changeState("general", false);
  };

  const handleChange = ({ target }) => {
    receiveDataUser(target.name, target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeState("general", true);
  };

  return (
    <form className="general__information">
      <Picture changeImage={changeImage}/>
      <InputForm
        name={"name"}
        text={"Name"}
        onFunction={handleChange}
        state={dataInfo.stateInputs}
        value={dataInfo.name}
      />
      <InputForm
        name={"surname"}
        text={"Surname"}
        onFunction={handleChange}
        state={dataInfo.stateInputs}
        value={dataInfo.surname}
      />
      <InputForm
        name={"email"}
        text={"Email"}
        type={"email"}
        onFunction={handleChange}
        state={dataInfo.stateInputs}
        value={dataInfo.email}
      />
      <InputForm
        name={"telephone"}
        text={"Telephone"}
        onFunction={handleChange}
        type={"tel"}
        state={dataInfo.stateInputs}
        value={dataInfo.telephone}
      />
      <InputForm
        name={"location"}
        text={"Location"}
        onFunction={handleChange}
        state={dataInfo.stateInputs}
        value={dataInfo.location}
      />
      <InputForm
        name={"social"}
        text={"Social Media"}
        onFunction={handleChange}
        state={dataInfo.stateInputs}
        value={dataInfo.social}
      />
      <Description
        name={"description"}
        text={"Description"}
        onFunction={handleChange}
        state={dataInfo.stateInputs}
        value={dataInfo.description}
      />
      <Button
        type={"submit"}
        text={"Safe"}
        onFunction={handleSubmit}
        className={"safe"}
      />
      <Button
        type={"button"}
        text={"Edit"}
        onFunction={handleEdit}
        className={"edit"}
      />
    </form>
  );
}

const Picture = ({changeImage}) => {
  return (
    <div className="picture">
      <label>picture</label>
      <button className="import" type="button">
        <label htmlFor="file" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"            
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </label>
      </button>
      <input id="file" type="file" onChange={changeImage}></input>
    </div>
  );
};
