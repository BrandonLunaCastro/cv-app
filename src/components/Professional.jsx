import React from "react";
import { InputForm } from "./InputForm";
import { Description } from "./Description";

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
      />
      <InputForm
        onFunction={handleChange}
        text={"Position title"}
        name={"position"}
        value={value.position}
        />
      <Description
        onFunction={handleChange}
        text={"Main responsibilities"}
        name={"responsibilities"}
        value={value.responsibilities}
        />
      <InputForm
        onFunction={handleChange}
        text={"Date we star work"}
        type={"date"}
        name={"dateStartWork"}
        value={value.dateStartWork}
      />
      <InputForm
        onFunction={handleChange}
        text={"Date we end work"}
        type={"date"}
        name={"dateEndWork"}
        value={value.dateEndWork}
      />
    </div>
  );
}
