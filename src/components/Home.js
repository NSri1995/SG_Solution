import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import web from './images/homeImg.jpg'
function Home(props) {
    return (
        <div className="homeText">
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 max-auto" >
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <h4>Grow your business with <strong style={{ color: "red" }}>SG Solutions</strong></h4>
                                    <span className="my-2"> We are the team of motivated and passionate people </span>
                                    <span className="my-2">who work for your business requirements and provide  </span>
                                    <span className="my-2"> solutions to all your needs on a single platform. As a company, we are commited to provide the best solutions to our clients. </span> <br/><br/>
                                    <h5>Trust us and we promise to stand on your expectations... </h5>
                                    <div className="mt-3">
                                        <NavLink to="/services" style={{ textDecoration: 'none' }} className="btn-get-started">Get started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img style={{width:"450px",paddingTop:"35px",height:"400px"}} src={web} alt="home img" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
}

export default Home;