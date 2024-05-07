import React, { useState } from "react";
import "../homepage/HomePage.css";
import logo from "../../assets/medify logo.png";
import { FaBars } from "react-icons/fa";

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container">
      <div className="headline">
        <span>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </span>
      </div>
      <div className="navBar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logoIcon" />
          <p>Medify</p>
        </div>
        <FaBars className="hamburger" onClick={() => setShowMenu(!showMenu)} />
        {showMenu && (
          <ul className="infoList">
            <li>Find Doctors</li>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgeries</li>
            <li>Software for Provider</li>
            <li>Facilities</li>
            <button className="signInButton">My Bookings</button>
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
