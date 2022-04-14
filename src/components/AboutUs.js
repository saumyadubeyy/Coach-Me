import React from 'react'
import "../css/AboutUs.css"
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import linkedIn from "../assets/linkedin.png"

const AboutUs = () => {
    return (
        <div id='our-team' className='about-us'>
            <div className='heading' style={{color: "#B9D8DB", fontWeight: "700"}}>Our Team</div>
            <div className='members'>
            <div className='member'>
                {/* <img className='blob' src={Blob} alt=" " /> */}
                <img className='img' src={girl} alt=" " />
                <div className='name'>Saumya Dubey</div>
                <div className='position'>190102315</div>
                <div className='socials'>
                    <img src={linkedIn} alt=" " />
                    <img src={instagram} alt=" " />
                    <img src={twitter} alt=" " />
                </div>
            </div>
            <div className='member'>
                {/* <img className='blob' src={Blob} alt=" " /> */}
                <img className='img' src={boy} alt=" " />
                <div className='name'>Himanshu Bhatt</div>
                <div className='position'>200102903</div>
                <div className='socials'>
                    <img src={linkedIn} alt=" " />
                    <img src={instagram} alt=" " />
                    <img src={twitter} alt=" " />
                </div>
            </div>
            <div className='member'>
                {/* <img className='blob' src={Blob} alt=" " /> */}
                <img className='img' src={girl} alt=" " />
                <div className='name'>Bhavya Aggarwal</div>
                <div className='position'>190102287</div>
                <div className='socials'>
                    <img src={linkedIn} alt=" " />
                    <img src={instagram} alt=" " />
                    <img src={twitter} alt=" " />
                </div>
            </div>
            <div className='member'>
                {/* <img className='blob' src={Blob} alt=" " /> */}
                <img className='img' src={girl} alt=" " />
                <div className='name'>Sachi Joshi</div>
                <div className='position'>190102156</div>
                <div className='socials'>
                    <img src={linkedIn} alt=" " />
                    <img src={instagram} alt=" " />
                    <img src={twitter} alt=" " />
                </div>
            </div>
            </div>
            <div className='text'>
                We are a team of 4 young people in the pre-final year of DIT University, Dehradun. Together, we aim to provide a platform that helps young people seek advice and guidance of experienced individuals of their respective fields.
                <br /><i className='subtext'>For more details, contact us at <span><a href='mailto:1000013818@dit.edu.in'>coachMe@gmail.com</a></span></i>
            </div>
            
        </div>
      )
}

export default AboutUs
