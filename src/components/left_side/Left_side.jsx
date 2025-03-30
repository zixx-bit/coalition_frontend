import "./Left_side.scss";

const patients = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  name: "Emily Williams",
  gender: "Female",
  age: 18,
}));

const Left_side = () => {
  return (
    <div className="leftSide">
      <div className="top">
        <div className="title">
          <h4>Patients</h4>
        </div>
        <div className="search">
          <img src="search_FILL0_wght300_GRAD0_opsz24.svg" />
        </div>
      </div>

      <div className="patients">
        <div className="patientsDesign">
          {patients.map((patient) => (
            <div className="patient" key={patient.id}>
              <div className="profile">
                <div className="profileImg">
                  <img src="Layer 8.png" />
                </div>
                <span className="text">
                  <p>
                    {" "}
                    <span className="name">{patient.name}</span>
                    <span className="ageGender">
                      {" "}
                      {patient.gender}, {patient.age}
                    </span>
                  </p>
                </span>
              </div>
              <span className="moreImageHoriz">
                <img src="more_horiz_FILL0_wght300_GRAD0_opsz24.svg" />
              </span>
            </div>
          ))}
        </div>
        <div className="scroll">
          <div className="topScroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Left_side;
