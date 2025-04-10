
import { useContext } from "react";

import "./right_side.scss";
import { PatientContext } from "../../lib/data";

const Right_side = () => {
  const {patient} = useContext(PatientContext);
  return (
    <div className="right">
      <div className="Patient">
        <div className="patientUser">
          <div className="patientImage">
            <img src="Layer 2@2x.png" />
          </div>
          <div className="patient_name">{patient.name}</div>
        </div>

        <div className="patientDetails">
          <div className="detail">
            <ul>
              <li>
                <div className="icon">
                  <img src="BirthIcon.svg" />
                </div>
              </li>
              <li>
                <div className="title">Date Of Birth</div>
                <div className="detail">{patient.date_of_birth}</div>
              </li>
            </ul>
          </div>

          <div className="detail">
            <ul>
              <li>
                <div className="icon">
                  <img src="FemaleIcon.svg" />
                </div>
              </li>
              <li>
                <div className="title">Gender</div>
                <div className="detail">{patient.gender}</div>
              </li>
            </ul>
          </div>

          <div className="detail">
            <ul>
              <li>
                <div className="icon">
                  <img src="PhoneIcon.svg" />
                </div>
              </li>
              <li>
                <div className="title">Contact Info</div>
                <div className="detail">{patient.phone_number}</div>
              </li>
            </ul>
          </div>

          <div className="detail">
            <ul>
              <li>
                <div className="icon">
                  <img src="PhoneIcon.svg" />
                </div>
              </li>
              <li>
                <div className="title">Emergency Contacts</div>
                <div className="detail">{patient.emergency_contact}</div>
              </li>
            </ul>
          </div>

          <div className="detail">
            <ul>
              <li>
                <div className="icon">
                  <img src="InsuranceIcon.svg" />
                </div>
              </li>
              <li>
                <div className="title">Insurance Provider</div>
                <div className="detail">{patient.insurance_type}</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="button">
          <button>Show All Information</button>
        </div>
      </div>

      
      <div className="lab_results">
      <div className="labTitle"><span>Lab Results</span></div>
        <div className="labDesign">
          <div className="tests">
            <div className="labResult">
              <p>{patient.lab_results[0]}</p>
              <span>
                <img src="download_FILL0_wght300_GRAD0_opsz24.svg" />
              </span>
            </div>

            <div className="labResult">
            <div className="ctScan">
              <p>{patient.lab_results[1]}</p>
              <span>
                <img src="download_FILL0_wght300_GRAD0_opsz24.svg" />
              </span>
            </div>
            </div>

            <div className="labResult">
              <p>{patient.lab_results[2]}</p>
              <span>
                <img src="download_FILL0_wght300_GRAD0_opsz24.svg" />
              </span>
            </div>


            <div className="labResult">
              <p>{patient.lab_results[3]}</p>
              <span>
                <img src="download_FILL0_wght300_GRAD0_opsz24.svg" />
              </span>
            </div>

            <div className="labResult">
              <span>
              </span>
            </div>
          </div>
          <div className="scroll">
            <div className="topScroll"></div>
            {/* <div className="bottomScroll"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right_side;
