import React from "react";
import './Navbar.css'
import navlogo from '../../assets/nav-logo.png';
import navProfile from '../../assets/nav-profile.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={navlogo} alt="" className="nav-logo" />
            <div className="Admin">
                <div className="name">MgnZone</div>
                <div className="panel">Admin Panel</div>
            </div>
            <img src={navProfile} alt="" className="nav-profile" />
        </div>
    )
}

export default Navbar;