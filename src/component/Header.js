import React from 'react';
import '../stylesheet/Header.css';
import logo from '../images/Logo1.png';

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img 
        src={logo}
        alt={'logo_img'} 
        className="logo"

       />
      </div>
      <div className="header_nav">
        <div className="header_team">Team</div>
        <div className="header_about">About Us</div>
        <div className="header_course">Courses</div>
        <div className="header_contact">Contact</div>
      </div>
      <div className="header_startbtn">
        <button type="button" className="btn">Start a Project</button>
      </div>
    </div>
  )
}

export default Header;