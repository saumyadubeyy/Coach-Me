import React, { useState } from 'react'
import "../css/Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
        console.log("i was clicked")
    }

    return (
        <div className="nav">
            <div className='logo'><Link className='nav-link' to='/Coach-Me'>CoachMe</Link></div>
            <div className="nav-links">
                <span className="item"><Link className="link" to='/Coach-Me'>Home</Link></span>
                <span className="item"><Link className="link" to='/Coach-Me/features'>Special Features</Link></span>
                <span className="item"><Link className="link" to='/Coach-Me/about'>About Us</Link></span>
                <span className="item"><Link className="link" to='/Coach-Me/contactus'>Contact Us</Link></span>
                <span className="item" onClick={handleToggle}><button className="btn">Login</button></span>
            </div>
            <div className={toggle ? 'dropdown' : 'dropdown-close'}>
                <div className='mentor'>As a mentor</div>
                <div className='drop'>
                    <Link className='sign-links' to='/Coach-Me/signIn'><div>Sign In</div></Link>
                    <Link className='sign-links' to='/Coach-Me/signUp'><div>Sign Up</div></Link>
                </div>
                <div className='mentee'>As a mentee</div>
                <div className='drop'>
                    <Link className='sign-links' to='/Coach-Me/signIn'><div>Sign In</div></Link>
                    <Link className='sign-links' to='/Coach-Me/signUp'><div>Sign Up</div></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
