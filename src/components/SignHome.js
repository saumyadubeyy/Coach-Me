import React from 'react'
import "../css/SignHome.css"
import { Link } from 'react-router-dom'
import vector from "../assets/vector.png"

const SignHome = () => {
  return (
    <div className='signHome'>
        <Link className='link sign' to='/Coach-Me/signIn'><div>★ As a mentor</div></Link>
        <Link className='link sign' to='/Coach-Me/signIn'><div>★ As a mentee</div></Link>
        <img className='vector' src={vector} alt='' />
    </div>
  )
}

export default SignHome