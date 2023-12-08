import { Description } from "./Description";
import { InputForm } from "./InputForm";
import Button from "./Button"

const handleSafe = () => "g"

export default function GeneralInformation({ dataInfo, receiveDataUser }) {
  const handleChange = ({target}) => {
    receiveDataUser(target.name,target.value)
  }
  return (
    <form>
      <Picture />
      <InputForm
        name={"name"}
        text={"Name"}
        onFunction={handleChange}
        value={dataInfo.name}
      />
      <InputForm
        name={"surname"}
        text={"Surname"}
        onFunction={handleChange}
        value={dataInfo.surname}
      />
      <InputForm
        name={"email"}
        text={"Email"}
        type={"email"}
        onFunction={handleChange}
        value={dataInfo.email}
      />
      <InputForm
        name={"telephone"}
        text={"Telephone"}
        type={"tel"}
        onFunction={handleChange}
        value={dataInfo.telephone}
      />
      <InputForm
        name={"location"}
        text={"Location"}
        onFunction={handleChange}
        value={dataInfo.location}
      />
      <InputForm
        name={"social"}
        text={"Social Media"}
        onFunction={handleChange}
        value={dataInfo.social}
      />
      <Description 
        name={"description"}
        text={"Description"}
        value={dataInfo.description}
        onFunction={handleChange}
      />
      <Button type={"submit"} text={"Safe"} onFunction={handleSafe}/>
    </form>
  );
}


const Picture = () => {
  return (
    <div>
      <label>picture</label>
      <button className="import" type="button" >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </span>
      </button>
      <dialog className="dialog__img">
          <input type="file"></input>
      </dialog> 
    </div>
  );
};