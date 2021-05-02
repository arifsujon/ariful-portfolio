import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import ariful from '../../images/ariful.jpg';
import MOVEON from '../../images/moveon.png';
import pureGrocery from '../../images/pure-grocery.png';
import gokada from '../../images/gokada.png';

const Portfolio = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={MOVEON} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">MERN Stack Web Application. Different kind of Services includes. Passenger can choose vehicle for getting services.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={pureGrocery} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">PURE GROCERY</h5>
                                <p class="card-text">Full Stack Website. User can order grocery and see their order list. Google login system included.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={gokada} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">GOKADA</h5>
                                <p class="card-text">This Website developed by react js. Gokada is a ride sharing website. You can get a ride to go your destination.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;