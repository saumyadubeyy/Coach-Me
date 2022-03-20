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
                    <img className='img' src={help} alt=" " />
                </div>
            </div>         
                <h2>Why choose <span className='logo-text'>CoachMe?</span></h2>
            <div className='feature-holder'>
                <div className='feature' style={{backgroundColor : "#E7E973"}}>
                    <div className='feature-heading'>Vast List of Mentors to choose from</div>
                    <div className='feature-text'>Duis elit ligula, efficitur eu magna ac, accumsan pretium sem. Pellentesque, at feugiat orci. Mauris placerat</div>
                </div>
                <div className='feature' style={{backgroundColor : "#0EBEE4"}}>
                <div className='feature-heading'>Vast List of Mentors to choose from</div>
                    <div className='feature-text'>Duis elit ligula, efficitur eu magna ac, accumsan pretium sem. Pellentesque, at feugiat orci. Mauris placerat</div>
                </div>
                <div className='feature' style={{backgroundColor : "#3AB764"}}>
                <div className='feature-heading'>Vast List of Mentors to choose from</div>
                    <div className='feature-text'>Duis elit ligula, efficitur eu magna ac, accumsan pretium sem. Pellentesque, at feugiat orci. Mauris placerat</div>
                </div>
                <div className='feature' style={{backgroundColor : "#0EBEE4"}}>
                <div className='feature-heading'>Vast List of Mentors to choose from</div>
                    <div className='feature-text'>Duis elit ligula, efficitur eu magna ac, accumsan pretium sem. Pellentesque, at feugiat orci. Mauris placerat</div>
                </div>
                <div className='feature' style={{backgroundColor : "#E7E973"}}>
                <div className='feature-heading'>Vast List of Mentors to choose from</div>
                    <div className='feature-text'>Duis elit ligula, efficitur eu magna ac, accumsan pretium sem. Pellentesque, at feugiat orci. Mauris placerat</div>
                </div>
            </div>
            <div className='footer'>For any further details, contact us at <i onClick={sendEmail} style={{textDecoration : "underline", cursor : "pointer"}}>coachme@gmail.com</i></div>
        </div>
    )
}

export default SpecialFeatures
