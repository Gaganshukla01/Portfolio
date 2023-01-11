import React from "react";
import './experience.styles.css';
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h4>
                What Skills I have
            </h4>
            <h2>
                My SKills
            </h2>
            <div className="container experience-container">
                <div className="experience-language">
                    <h3>Language/Programming</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>C,C++,Python</h4>
                                <small className="text-light">Advanced</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Data Structure Algorithm</h4>
                                <small className="text-light">Intermediate</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Reactjs</h4>
                                <small className="text-light">Intermediate</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Wordpress</h4>
                                <small className="text-light">Intermediate</small>
                            </div>


                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Html,Css,Js</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>AI</h4>
                                <small className="text-light">Intermediate</small>
                            </div>

                        </article>

                        
                    </div>
                </div>


                <div className="experience-tech">
                    <h3>Technology/Frameworks</h3>
                    <div className="experience-content">
                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>ReactJS</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Redux</h4>
                                <small className="text-light">Basic</small>

                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Linux</h4>
                                <small className="text-light">Basic</small>
                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Git and Github</h4>
                                <small className="text-light">Intermediate</small>

                            </div>

                        </article>

                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>VS code</h4>
                                <small className="text-light">Intermediate</small>
                            </div>

                        </article>
                        <article className="experience-details">
                            <BsPatchCheckFill className="edit-icon" />
                            <div>
                                <h4>Qt Creator</h4>
                                <small className="text-light">Basic</small>

                            </div>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;