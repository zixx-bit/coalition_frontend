import React from "react";
import "./center.scss";

const Center = () => {
  return (
    <div className="center">
      <div className="top">
        <h3>Diagnosis History</h3>
        <div className="chart"></div>
        <div className="readings">
          <div className="respiratoryRate">
            <div className="icon">
              <img src="respiratory rate.svg" />
            </div>
            <div className="title">Respiratory Rate</div>
            <div className="reading">20 bpm</div>
            <div className="category">Normal</div>
          </div>

          <div className="temperature">
            <div className="icon">
              <img src="temperature.svg" />
            </div>
            <div className="title">Temperature</div>
            <div className="reading">98.6F</div>
            <div className="category">Normal</div>
          </div>

          <div className="heartRate">
            <div className="icon">
              <img src="HeartBPM.svg" />
            </div>
            <div className="title"> Heart Rate</div>
            <div className="reading">78 bpm</div>
            <div className="category">
              <span className="dropdown">
                {" "}
                <img src="ArrowDown.svg" />
              </span>
              Lower than Average
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="diagonistic_list">
          <div className="diagnostic_title">
            <p>Diagonistic List</p>
          </div>
          <div className="table">
            <div className="problemm"> <span className="title">Problem</span>
              <p>Hypertension</p>
              <p>Hypertension</p>
              <p>Hypertension</p>
              </div>
            <div className="descriptionn">
             <span className="title"> Description</span>
              <p className="">Chronic high blood pressure </p>
              <p className="">
                Insulin resistance and elevated blood sugar{" "}
              </p>
              <p className="">
                Recurrent episodes of bronchial constriction
              </p>
            </div>
            <div className="statuss"> <span className="title">Status</span>
              <p>Under Observation</p>
              <p>Cured</p>
              <p>Inactive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
