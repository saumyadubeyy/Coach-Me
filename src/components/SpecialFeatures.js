import React from 'react'
import "../css/SpecialFeatures.css"
import help from "../assets/help3.jpg"

const SpecialFeatures = () => {
    const sendEmail = () => {
        window.location = "mailto: coach123me@gmail.com"
    }
    return (
        <div className="special-features">
            <div className='features-holder'>
                <div className='holder-text'>
                    <h1 style={{color : "#698f3f"}}>Special Features</h1>
                    <div className='heading'>Bridging the gap between <span style={{color : "#E25755"}}>people who want to learn</span> and <span style={{color : "#3AB764"}}>people who want to help</span></div>
                    <div className='text'>
                        Have an idea about what you wanna build but don't know how to start?
                        <span style={{color : "#0EBEE4"}}> <br/>Well, you've come to the right place! </span>
                        <br/>We have someone who has gone throught the very same thing when they began their journey :)
                    </div>
                </div>
                <div className='holder-image'>
                    <img className='imge' src={help} alt=" " />
                </div>
            </div>         
                <h2>Why choose <span className='logo-text'>CoachMe?</span></h2>
            <div className='featuress-holder'>
                <div className='features' style={{backgroundColor : "#E7E973"}}>
                    <div className='features-heading'>Vast List of Mentors to choose from</div>
                    <div className='features-text'>Anything you’d ever want help with, we have someone who has the correct skillset to help you.</div>
                </div>
                <div className='features' style={{backgroundColor : "#0EBEE4"}}>
                <div className='features-heading'>Rating for all mentors available</div>
                    <div className='feature-text'>5-star rating system for all the mentors will be displayed in their contact cards.</div>
                </div>
                <div className='features' style={{backgroundColor : "#3AB764"}}>
                <div className='features-heading'>Hassle-free communication</div>
                    <div className='features-text'>In-built chat box to maintain contact with the mentors.</div>
                </div>
                <div className='features' style={{backgroundColor : "#0EBEE4"}}>
                <div className='features-heading'>Build connections with important people</div>
                    <div className='features-text'>Hundreds of important people who can help you achieve milestones in your career.</div>
                </div>
                <div className='features' style={{backgroundColor : "#E7E973"}}>
                <div className='features-heading'>Post your doubts on our Doubt Wall</div>
                    <div className='features-text'>A space where users can post their doubts/questions, and people with answers can help them.</div>
                </div>
            </div>
            <div className='footer'>For any further details, contact us at <i onClick={sendEmail} style={{textDecoration : "underline", cursor : "pointer"}}>coachme@gmail.com</i></div>
        </div>
    )
}

export default SpecialFeatures
