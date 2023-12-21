import "../styles/EducationExperience.css";
function EducationExperience({ values }) {
  return (
    <>
      {values
        .filter((el) => el.stateInputs)
        .map((val) => {
          const dateStart = !val.dateStart ? new Date() : new Date(val.dateStart);
          const dateEnd =  !val.dateEnd ? new Date() : new Date(val.dateEnd);
          return (
            <div key={val.id} className="education__experience">
              <p className="school">{val.school}</p>
              <b className="date__study">
                {dateStart.getFullYear()} - {dateEnd.getFullYear() === 2023 ? "present" : dateEnd.getFullYear()}
              </b>
              <p className="tuition">{val.title}</p>
            </div>
          );
        })}
    </>
  );
}
export default EducationExperience;
