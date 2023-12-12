function ShowGeneral({dataInfo}) {
  return (
    <>
      <img alt=""></img>
      <p className="description">Description</p>
      <p>{dataInfo.description}</p>
      <p className="contact">Contact</p>
      <ul>
        <li>
          <address>{dataInfo.email}</address>
        </li>
        <li>
          <address>{dataInfo.telephone}</address>{" "}
        </li>
        <li>
          <address>{dataInfo.social}</address>
        </li>
        <li>
          <address>{dataInfo.location}</address>
        </li>
      </ul>
    </>
  );
}

export default ShowGeneral;
