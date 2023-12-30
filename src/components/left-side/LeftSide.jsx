// VideoBackground.js
import React from "react";
import "./LeftSide.css"; // Import your CSS file

const LeftSide = () => {
  return (
    <div className="video">
      <video autoPlay muted loop className="fitVideo">
        <source src="video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LeftSide;
