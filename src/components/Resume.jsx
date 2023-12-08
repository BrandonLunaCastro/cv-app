import { verifyState } from "../helpers/verifyState";

export const Resume = ({ dataInfo, educationalValues, professionalValues }) => {
  return (
    <section className="resume">
      <section className="left">
        <src alt=""></src>
        <p className="description">Description</p>
        <p>{dataInfo.description}</p>
        <p className="contact">Contact</p>
        <ul>
          <li>{dataInfo.email}</li>
          <li>{dataInfo.telephone}</li>
          <li>{dataInfo.social}</li>
          <li>{dataInfo.location}</li>
        </ul>
      </section>
      <section className="right">
        <h1>
          {dataInfo.name} {dataInfo.surname}
        </h1>
        <p className="education">Education</p>
        {verifyState(educationalValues) &&
          educationalValues.map((values) => {
            return (
              <div key={values.id}>
                <p>{values.school}</p>
                <b>{values.dateStart} - {values.dateEnd}</b>
                <small>{values.title}</small>
              </div>
            );
          })}
      </section>
    </section>
  );
};
