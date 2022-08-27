import React from "react";
import './header.styles.css';
import Cta from "../cta/cta.component";
import ME from '../../assets/me.jpeg';
import Linksocial from "../LinkSocial/linksocial.component";
const Header = () => {
    return (
        <header>
            <div className="conatiner header-container">
                <h2 className="kart">
                    Hello I'm
                </h2>
                <h1>
                    Gagan Shukla
                </h1>
                <h3 className="text-light">
                    Competitive Programmer and Front-end ReactJS Developer.
                </h3>
                <Cta/>
            <Linksocial/>
            <div className="me-container">
            <img src={ME} alt="" className='Helol'/>
            </div>
            
            <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>

    );
}
export default Header;