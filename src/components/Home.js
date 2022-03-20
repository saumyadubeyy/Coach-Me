import React from 'react'
import "../css/Home.css"
import diagram from "../assets/diagram.jpg"
import ladyHire from "../assets/lady-hire.png"
import ladyStudent from "../assets/lady-student.png"

const Home = () => {
    return (
        <div className='homepage'>
            <img src="https://talentidacademy.com/wp-content/uploads/TalentID-Academy_Analytics-Mentoring.svg" className="image" alt="" />
            <h1>An app for entrepreneurs</h1>
            <div className='main-text'>Building a platform to connect young bright minds, who need help with experienced individuals with relevant interests.</div>
            <div className='card-holder'>
                <div className='card card-1'>
                    <div className='card-heading'>Find a Mentor</div>
                    <div className='card-text'>Connect with over 100 mentors with coachMe</div>
                    <button>Get Started</button>
                    <img className='lady-1' src={ladyStudent} alt="" />
                </div>
                <div className='card card-2'>
                    <div className='card-heading'>Find a Mentee</div>
                    <div className='card-text'>Connect with over 100 mentees with coachMe</div>
                    <button>Get Started</button>
                    <img className='lady-2' src={ladyHire} alt="" />
                </div>
            </div>
            <h3>Connect with over <span style={{color : "#E25755"}}>100 mentors of different fields</span> and seek guidance from the perfect match!</h3>
            <img className='diagram' src={diagram} alt="" />
            <h2>Special <i style={{color : "#1A305C"}}>Features</i></h2>
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
            </div>
            <div className='footer'>For any further details, contact us at <i style={{textDecoration : "underline", cursor : "pointer"}}>coachme@gmail.com</i></div>
        </div>
    )
}

export default Home
