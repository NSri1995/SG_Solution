import React from 'react';
import './Navbar.css';
import seoImg from './images/seoImg.jpg';
import webImg from './images/webDev.jpg';
function WebsiteServices(props) {
    return (
        <div className="homeText">
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 max-auto" >
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <h4>Overview</h4>
                                    <p className="my-2">
                                        In today’s world, a business website has become a necessity
                                        for any business out there. This is an era where people and companies are
                                        connected to the internet to gain information. The main reason people
                                        access the internet is to find information. Information becomes crucial
                                        when you become a part of the business world and a website allows you to deliver
                                        this information to your customers.
                                    </p>
                                    <p>
                                        We offer efficient and flexible web solutions that perform seamlessly
                                        across devices, browsers, and operating systems.
                                        Our sophisticated web solutions help in solving your
                                        complex business challenges. As your digital partner,
                                        we keep you updated on the latest accessibility requirements and
                                        technologies.
                                    </p>
                                    <p>
                                        Our approach goes beyond coding and we tailor every piece of
                                        software to your business needs. We give you full control over
                                        the process.We collaborate with our clients and help them build meaningful
                                        relationships their customers through custom digital solutions.
                                    </p>

                                    <br />

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img style={{ width: "450px", paddingTop: "35px", height: "400px" }} src={webImg} alt="web img" />
                                </div>
                            </div>  <br /> 
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <h4>Process we follow</h4>
                                    <p>
                                        Our integrated team of SG Solutions comprises creative geniuses, brand specialists,
                                        marketing gurus, thought leaders and development masterminds.
                                        They spend most of their time in devising mechanisms and techniques for businesses to grow upon.
                                    </p>
                                    <p>
                                        Your business is valuable and we add more value to it with intuitive user-friendly websites.
                                        Our expertise lies in
                                        E-commerce development, custom web application development, ERP and CRM integrations.
                                    </p>
                                    {/* <div className="mt-3">
                                        <NavLink to="/services" style={{ textDecoration: 'none' }} className="btn-get-started">Get started</NavLink>
                                    </div> */}
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img style={{ width: "450px", paddingTop: "35px", height: "300px" }} src={seoImg} alt="seo img" />
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
}

export default WebsiteServices;