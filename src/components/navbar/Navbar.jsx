// VideoBackground.js
import React from "react";
import "./Navbar.css"; // Import your CSS file
import { Link } from "react-router-dom";
import { Navbar } from 'flowbite-react';

const Navbaras = () => {

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="navbar-logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
  /*
  return (
    <div className="nav-content">
      <div className="first-part">
        <img src="navbar-logo.png" alt="Company Thumbnail" className="thumbnail" />
      </div>
      <div className="middle-part">
        <div className="text">Rinkiniai</div>
        <div className="text">Kortelės</div>
      </div>
      <div className="last-part">
        <div className="text">Apie mus</div>
      </div>
    </div>
  );*/
};

export default Navbaras;
