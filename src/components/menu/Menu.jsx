import React from "react";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img src="TestLogo.svg" />
      </div>
      <div className="menu_section">
        <li>
          <div className="icons">
            <img src="home_FILL0_wght300_GRAD0_opsz24.svg" />
            <span>Overview</span>
          </div> 
        </li>
        <li className="patients">
          <span className="icons">
            <img src="group_FILL0_wght300_GRAD0_opsz24.svg" />
          </span>
         Patients 
        </li>
        <li>
        <div className="icons">
            <img src="calendar_today_FILL0_wght300_GRAD0_opsz24.svg" />
            <span>Schedule</span>
          </div> 
        </li>
        <li>
          <span className="icons">
            <img src="chat_bubble_FILL0_wght300_GRAD0_opsz24.svg" />
          </span>
          Message
        </li>
        <li>
        <div className="icons">
            <img src="credit_card_FILL0_wght300_GRAD0_opsz24.svg" />
            <span>Transactions</span>
          </div> 
        </li>
      </div>

      <div className="user_section">
        <div className="user">
          <div className="userImage">
            <img src="senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"></img>
          </div>
          <div className="userDetails">
            <div className="name">Dr.Jose Simmons</div>
            <div className="title">General Practitioner</div>
          </div>

          <div className="vr"></div>
          <div className="settingsImage">
            <img src="settings_FILL0_wght300_GRAD0_opsz24.svg"></img>
          </div>
          <div className="moreImage">
            <img src="more_vert_FILL0_wght300_GRAD0_opsz24.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
