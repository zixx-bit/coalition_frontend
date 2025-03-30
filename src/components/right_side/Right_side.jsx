import React from "react";
import "./right_side.scss";

const Right_side = () => {
  return (
    <div className="right">
      <div className="Patient">
        <div className="patientUser">
          <div className="patientImage">
            <img src="Layer 2@2x.png" />
          </div>
          <div className="patient_name">Jessica Taylor</div>
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
                <div className="detail">August 23, 1996</div>
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
                <div className="detail">Female</div>
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
                <div className="detail">(415) 555-1234</div>
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
                <div className="detail">(415) 555-5678</div>
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
                <div className="detail">Sunrise Health Assurance</div>
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
              <p>Blood Tests</p>
              <span>
                <img src="download_FILL0_wght300_GRAD0_opsz24.svg" />
              </span>
            </div>

            <div className="labResult">
            <div className="ctScan">
              <p>CTScans</p>
              <span>
                <img src="download_FILL0_wght300_GRAD0_opsz24.svg" />
              </span>
            </div>
            </div>

            <div className="labResult">
              <p>X-Rays</p>
              <span>
                <img src="download_FILL0_wght300_GRAD0_opsz24.svg" />
              </span>
            </div>

            <div className="labResult">
              <p>Urine Test</p>
              <span>
                <img src="download_FILL0_wght300_GRAD0_opsz24.svg" />
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
