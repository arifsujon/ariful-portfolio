import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import ariful from '../../images/ariful.jpg'
import Footer from '../Shared/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>  
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={ariful} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={ariful} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={ariful} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blog;