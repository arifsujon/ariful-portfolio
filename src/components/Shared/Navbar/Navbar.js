import React from 'react';
import { Link } from 'react-router-dom';
import myPDF from '../../../File/resume-of-ariful.pdf'

const Navbar = () => {
    return (
        
            
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <Link class="navbar-brand" to="/">Navbar</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/portfolio">Portfolio</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li class="nav-item">
                                    <a className="btn btn-primary" href={myPDF} download="resume-of-ariful.pdf">Download Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
           
        
    );
};

export default Navbar;