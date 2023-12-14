import React from "react";
import { verifyState } from "../helpers/verifyState";
import EducationExperience from "./EducationExperience";
import ProfessionExperience from "./ProfessionExperience";
import ShowGeneral from "./ShowGeneral"

export const Resume = React.forwardRef(({ dataInfo, educationalValues, professionalValues }, ref) => {
  return (
    <section className="resume" ref={ref}>
      <section className="left">
          {
            dataInfo.stateInputs && 
            <ShowGeneral dataInfo={dataInfo}/>
          }
      </section>
      <section className="right">
          { dataInfo.stateInputs &&
            <h1>{dataInfo.name} {dataInfo.surname}</h1>
          }
        
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
});
