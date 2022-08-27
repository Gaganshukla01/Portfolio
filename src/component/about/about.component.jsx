import React from "react";
import './about.styles.css';
import ME from '../../assets/me-about.jpeg'
import {RiAwardFill} from 'react-icons/ri';
import {FiUsers} from 'react-icons/fi';
import {AiFillFolder} from 'react-icons/ai';



const About = () => {
    return (
        <section id="about">
            <h4 className="ka">Get to Know</h4>
            <h2>
                About me
            </h2>
            <div className="conatiner about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={ME} alt=" About image" className='edit' />
                    </div>

                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                        <RiAwardFill className='about-icon'/>
                        <h4>Skill/Technology</h4>
                        <small>6 months+ experience</small>
                        </article>

                        <article className="about-card">
                        <FiUsers className='about-icon'/>
                        <h4>Coding Profile</h4>
                        <small>Solved more than 100+ Problems</small>
                        </article>

                        <article className="about-card">
                        <AiFillFolder className='about-icon'/>
                        <h4>Projects</h4>
                        <small>3 Standard Projects</small>
                        </article>

                    </div>
                    <p>
                    Hi, Myself Gagan Shukla 3rd year Computer Science Student pursuing Bachelor's of Technology from Jabalpur 
                    Engineering College. Highly enthusiastic and curious student. Eager to learn and explore new thing. Want to gain
                    some industrial exposure and experience the work culture of Industries.
                    
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}
export default About;