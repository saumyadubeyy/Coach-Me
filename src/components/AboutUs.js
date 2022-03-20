import React from 'react'
import "../css/AboutUs.css"
import boy from "../assets/boy.png"
import girl from "../assets/girl.jpg"

const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className='heading'>Meet the team</div>
            <div className='team'>
                <div className='team-member' style={{backgroundColor : "#E4E65F"}}>
                    <img src={boy} alt=" " />
                    <div className='name'>Himanshu Bhatt</div>
                    <div className='r-no'>Roll Number: 200102903</div>
                </div>
                <div className='team-member' style={{backgroundColor : "#1BBFCE"}}>
                    <img src={girl} alt=" " />
                    <div className='name'>Saumya Dubey</div>
                    <div className='r-no'>Roll Number: 190102315</div>
                </div>
                <div className='team-member' style={{backgroundColor : "#6BC78B"}}>
                    <img src={girl} alt=" " />
                    <div className='name'>Sachi Joshi</div>
                    <div className='r-no'>Roll Number: 190102156</div>
                </div>
                <div className='team-member' style={{backgroundColor : "#E25454"}}>
                    <img src={girl} alt=" " />
                    <div className='name'>Bhavya Aggarwal</div>
                    <div className='r-no'>Roll Number: 190102287</div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
