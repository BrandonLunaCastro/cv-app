import "../styles/ProfessionExperience.css"
function ProfessionExperience({ values }) {
  return (
    <>
      {values
        .filter((el) => el.stateInputs)
        .map((val) => {
          const dateStart = !val.dateStart ? new Date() : new Date(val.dateStart) ; 
          const  dateEnd = !val.dateEnd ? new Date() : new Date(val.dateEnd);
          return (
            <div key={val.id} className="profession__experience">
              <p className="resume__company">{val.company}</p>
              <b className="date-work">
                {dateStart.getFullYear()} - {dateEnd.getFullYear() === 2023 ? "present" : dateEnd.getFullYear()}
              </b>
              <cite className="position">{val.position}</cite>
              <p className="responsibilities">{val.responsibilities}</p>
            </div>
          );
        })}
    </>
  );
}

export default ProfessionExperience;
