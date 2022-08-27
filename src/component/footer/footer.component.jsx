import React from "react";
import './footer.styles.css';
import {FiInstagram} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import {GrLinkedin} from 'react-icons/gr'
import CV from '../../assets/cv.pdf';


const Footer = () => {
    return (
        <footer>
            {/* <a href="#" className="foot-logo">KARTIKAY</a> */}
            <a href={CV} download className='btn btn-primary foot-logo'>Download Resume</a>
            <ul className="permalink">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#Services">Coding Profile</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-socials">
                <a href='https://www.instagram.com/gagan._shukla/' target="_blank"><FiInstagram/></a>
                <a href='https://www.linkedin.com/in/gagan-shukla-972713228/' target="_blank"><GrLinkedin/></a>
                <a href='https://github.com/Gaganshukla01' target="_blank"><AiFillGithub/></a>
            </div>
            <div className="footer-copyright">
                <small className="cc">
                    &copy; React-Portfolio. All rights Reserved.
                </small>
            </div>
        </footer>
    );
}
export default Footer;