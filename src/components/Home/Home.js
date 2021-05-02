import React from 'react';
// import About from '../About/About';
import Navbar from '../Shared/Navbar/Navbar';
import ariful from '../../images/ariful.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <div className="container">
                <div className="row mt-5 pt-3">
                    <div className="offset-md-2 col-md-8">
                        <img className="mx-auto d-block rounded-circle" style={{height: '300px'}} src={ariful} alt=""/>
                        <div className="my-intro">
                            <h1>Hi, I am Ariful Islam</h1>
                            <h6>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</h6>
                        </div>
                        <div className="social-icons text-center">
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
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;