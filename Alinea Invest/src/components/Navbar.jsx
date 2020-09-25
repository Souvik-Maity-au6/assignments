import React from 'react'
import Button from './Button'
import '../styles/Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <a href="/">
                        <img src="https://juno-public.s3-us-west-1.amazonaws.com/on-juno.png" alt="OnJuno Logo" />
                    </a>
                </div>
                <div className="navbar-link">
                    <a href="/">Home </a>
                    <a href="/">Company <i className="fas fa-angle-down icon-angle-down"></i></a>
                    <a href="/">Learn <i className="fas fa-angle-down icon-angle-down"></i></a>
                    <a href="/">Legal <i className="fas fa-angle-down icon-angle-down"></i></a>
                </div>
            </div>
            <div className="navbar-right">
                <Button width="120px" height="40px" text="Login" color="#4643EE" border="2px solid #4643EE" />
                <Button width="120px" height="40px" backgroundColor="#4643EE" color="white" text="Signup" />
            </div>
        </div>
    )
}

export default Navbar
