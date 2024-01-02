// VideoBackground.js
import React from 'react';
import './VideoBackground.css'; // Import your CSS file

const VideoBackground = () => {

  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='overlay'></div>
    </div>
  );
};

export default VideoBackground;