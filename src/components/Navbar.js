import React from 'react'
import "../css/Navbar.css"
import logo from "../assets/logo.jpg"
import {Link} from 'react-router-dom'
import logoTry from "../assets/logo.svg"

const Navbar = () => {
    return (
        <div className="nav">
            <div className='logo'><Link className='nav-link' to='/Coach-Me'>CoachMe</Link></div>
            <div className="nav-links">
                <span className="item"><Link className="link" to='/Coach-Me'>Home</Link></span>
                <span className="item"><Link className="link" to='/Coach-Me/features'>Special Features</Link></span>
                <span className="item"><Link className="link" to='/Coach-Me/about'>About Us</Link></span>
                <span className="item"><Link className="link" to='/Coach-Me/contactus'>Contact Us</Link></span>
                <span className="item"><Link to='/Coach-Me/signHome'><button className="btn">Sign In</button></Link></span>
            </div>
        </div>
    )
}

export default Navbar
