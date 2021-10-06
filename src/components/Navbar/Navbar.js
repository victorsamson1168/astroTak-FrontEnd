import React from 'react'
import styles from "./styles.css"
import logo from "../../assets/logo.png"
import hamburger from "../../assets/hamburger.png"
import profile from "../../assets/profile.png"

const Navbar = () => {
    return (
        <div>
            <nav className="navbarContainer">
            <img src={hamburger} className="habmurgerMenu"></img>
            <img src={logo} className="logo"></img>
            <img src={profile} className="avatar"></img>
            </nav>
            
            
        </div>
    )
}

export default Navbar
