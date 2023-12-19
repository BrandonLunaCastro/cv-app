import "../styles/ProfessionExperience.css"
function ProfessionExperience({ values }) {
  return (
    <>
      {values
        .filter((el) => el.stateInputs)
        .map((val) => {
          const dateStart = new Date(val.dateStartWork); 
          const  dateEnd = new Date(val.dateEndWork);
          return (
            <div key={val.id} className="profession__experience">
              <p className="company">{val.company}</p>
              <b className="date-work">
                {dateStart.getFullYear()} - {dateEnd.getFullYear()}
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
