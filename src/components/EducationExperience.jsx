function EducationExperience({ values }) {
  return (
    <>
      {values
        .filter((el) => el.stateInputs)
        .map((val) => {
          return (
            <div key={val.id}>
              <p>{val.school}</p>
              <b>
                {val.dateStart} - {val.dateEnd}
              </b>
              <small>{val.title}</small>
            </div>
          );
        })}
    </>
  );
}
export default EducationExperience;
