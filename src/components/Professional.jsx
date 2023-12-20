import React from "react";
import { InputForm } from "./InputForm";
import { Description } from "./Description";
import "../styles/Professional.css"
export default function Professional({ value, receiveData }) {
  const handleChange = ({ target }) => {
    receiveData(target.name, target.value, value.id, "profession");
  };
  return (
    <div className="professional">
      <InputForm
        onFunction={handleChange}
        text={"Company name"}
        name={"company"}
        value={value.company}
        state={value.stateInputs}
      />
      <InputForm
        onFunction={handleChange}
        text={"Position title"}
        name={"position"}
        value={value.position}
        state={value.stateInputs}
        />
      <Description
        onFunction={handleChange}
        text={"Main responsibilities"}
        name={"responsibilities"}
        value={value.responsibilities}
        state={value.stateInputs}
        />
      <InputForm
        onFunction={handleChange}
        text={"Date we star work"}
        type={"date"}
        name={"dateStartWork"}
        value={value.dateStartWork}
        state={value.stateInputs}
      />
      <InputForm
        onFunction={handleChange}
        text={"Date we end work"}
        type={"date"}
        name={"dateEndWork"}
        value={value.dateEndWork}
        state={value.stateInputs}
      />
    </div>
  );
}
