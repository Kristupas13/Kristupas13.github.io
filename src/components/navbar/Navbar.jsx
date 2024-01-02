// VideoBackground.js
import React from "react";
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  return (
    <div className="nav-content">
      <div className="first-part">
        <img src="3.jpg" alt="Company Thumbnail" className="thumbnail" />
        <span className="p-3">Nuo Mažų Dienų</span>
      </div>
      <div className="middle-part">
        <div className="text">Rinkiniai</div>
        <div className="text">Kortelės</div>
      </div>
      <div className="last-part">
        <div className="text">Apie mus</div>
      </div>
    </div>
  );
};

export default Navbar;
