import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-text">
                <p className="text-primary text-center">&copy; {(new Date()).getFullYear()} Design with <i className=""><FontAwesomeIcon className="social text-danger heart-icon" icon={faHeart} /></i> By <a href="https://www.linkedin.com/in/arifulsujon" target="_blank" rel="noreferrer">Ariful</a></p>
            </div>
        </footer>
    );
};

export default Footer;