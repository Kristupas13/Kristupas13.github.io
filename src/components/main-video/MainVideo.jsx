// VideoBackground.js
import React from "react";
import "./MainVideo.css"; // Import your CSS file

const MainVideo = () => {
  return (
    <video autoPlay muted loop className="fit-video">
      <source src="video2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default MainVideo;
