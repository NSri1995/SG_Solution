import React from 'react';
import './Navbar.css';
import web from './images/digitalWorld.jpg'
function About(props) {
    return (
        <div className="homeText">
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 max-auto" >
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <h4> Who are we? </h4>
                                    <span className="my-2"><strong style={{ color: "red" }}>SG Solutions</strong> is a team  of
                                        creative and sharp brains that goes a step ahead and push higher to get better results.
                                        We break your requirements into smaller solutions and revolutionize your digital experience.
                                        At SG Solutions, we focus on your requirements and busineess goals and achieve results.We believe
                                        in openly sharing our expertise and ensure long term relationship with our clients. &nbsp;
                                        <strong>SG Solution's</strong> web developers,designers and analysts provide solutions through research,
                                        design and execution.
                                    </span>
                                    <br /><br />
                                    <h4> Our Vision </h4>
                                    <span> Our passion for digital experience goes beyond websites, apps,search and social platforms
                                        At SG Solutions, We work with the vision - <strong style={{ color: "red" }}>Break to transform digital experience</strong>
                                    </span>
                                    <br /><br />
                                    <h4> Our Mission </h4>
                                    <span>
                                        In today's world of fast growing technologies and IT market, we run with a mission to provide better
                                        solutions at best price to our clients.We believe to have competition in the market for better technologies
                                        and ideas to grow and bring further revolutions in the digital world.
                                    </span>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} style={{width:"550px",paddingTop:"60px",height:"500px"}} alt="digital img" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
}

export default About;
//3225USB