import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import ariful from '../../images/ariful.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './About.css'
import { Link } from 'react-router-dom';
import myPDF from '../../File/resume-of-ariful.pdf'

const About = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="container">
                <div className="row about align-items-center">
                    <div className="col-md-5">
                        <img className="img-fluid" src={ariful} alt=""/>
                    </div>
                    <div className="col-md-7">
                        <div className="about-content">
                            <div className="about-heading">
                                <h2>About Me.</h2>
                                <span>Front-End Web Developer</span>
                            </div>
                            <p>I'm <b>Ariful Islam</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, perspiciatis possimus accusantium iusto molestiae magnam! Maxime, deserunt! Fuga saepe repudiandae inventore dolor laborum suscipit cumque voluptatibus, veniam officia ad? Molestias!</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, cupiditate ullam dolores laudantium repellendus, quaerat officia ipsam ab minus obcaecati ratione perferendis, quas asperiores itaque aliquid tempore. Aspernatur error, nihil quidem doloremque nobis eveniet? Aspernatur modi nesciunt natus vero quaerat.</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/arifsujon.bd" target="_blank" rel="noreferrer">
                                    <i className="social-single"><FontAwesomeIcon icon={faFacebookF} /></i>
                                </a>
                                <a href="https://github.com/arifsujon" target="_blank" rel="noreferrer">
                                    <i className="social-single mx-4"><FontAwesomeIcon icon={faGithub} /></i>
                                </a>
                                <a href="https://www.linkedin.com/in/arifulsujon" target="_blank" rel="noreferrer">
                                    <i className="social-single"><FontAwesomeIcon icon={faLinkedinIn} /></i>
                                </a>
                            </div>
                            <div className="about-button">
                                
                                <a className="btn btn-primary" href={myPDF} download="resume-of-ariful.pdf"> Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;