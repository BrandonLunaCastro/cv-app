function ProfessionExperience({ values }) {
  return (
    <>
      {values
        .filter((el) => el.stateInputs)
        .map((val) => {
          return (
            <div key={val.id}>
              <p>{val.company}</p>
              <b>
                {val.dateStartWork} - {val.dateEndWork}
              </b>
              <cite>{val.position}</cite>
              <p>{val.responsibilities}</p>
            </div>
          );
        })}
    </>
  );
}

export default ProfessionExperience;
