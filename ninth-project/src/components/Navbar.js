import React from "react";
import "../style/Navbar.css";

const Navbar = () => {
    return(
        <nav className="Navbar">
            <img src={process.env.PUBLIC_URL + `/logo.png`} className="Navbar--logo" alt="logo" />
            <ul className="Navbar--list">
                <li className="Navbar--item">Pokemon</li>
                <li className="Navbar--item">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;