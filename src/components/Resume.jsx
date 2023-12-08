import { verifyState } from "../helpers/verifyState";
import EducationExperience from "./EducationExperience";
import ProfessionExperience from "./ProfessionExperience";

export const Resume = ({ dataInfo, educationalValues, professionalValues }) => {
  return (
    <section className="resume">
      <section className="left">
        <img alt=""></img>
        <p className="description">Description</p>
        <p>{dataInfo.description}</p>
        <p className="contact">Contact</p>
        <ul>
          <li><address>{dataInfo.email}</address></li>
          <li><address>{dataInfo.telephone}</address> </li>
          <li><address>{dataInfo.social}</address></li>
          <li><address>{dataInfo.location}</address></li>
        </ul>
      </section>
      <section className="right">
        <h1>
          {dataInfo.name} {dataInfo.surname}
        </h1>
        <p className="education">Education</p>
        { verifyState(educationalValues) &&
          <EducationExperience values={educationalValues}/>
        }
        {
          verifyState(professionalValues) &&
          <ProfessionExperience values={professionalValues}/>
        }
      </section>
    </section>
  );
};
