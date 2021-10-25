import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import web from './images/homeImg.jpg'

function Products(props) {
    return (
        <div className="homeText">
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 max-auto" >
                            <div className="row">
                                <h4>Enhance your business with <strong style={{ color: "red" }}>SG Solutions</strong></h4>
                                <span className="my-1">
                                    If you desire your website to be robust,
                                    scalable and user-friendly or if you want a custom web
                                    development solution that meets all your requirements, our
                                    team SG Solutions, is adroit with that. Our efficient and flexible
                                    web solutions perform seamlessly across multiple platforms.
                                    Our sophisticated web solutions are the answers to your
                                    complex business problems.
                                </span>
                                <br /><br />
                            </div> <br /><br /><br />
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <h4>Website design & development</h4>
                                    <span className="my-2">
                                        At SG Solutions, we offer sophisticated web solutions that perform seamlessly across devices,
                                        browsers, and operating systems. As your digital partner, our goal is to keep you updated on the
                                        latest technology news and accessibility requirements. Our web development approach goes
                                        beyond coding and we tailor each object of your website according to your business’ needs.
                                        Our approach goes beyond coding and we tailor every piece of
                                        software to your business needs. We give you full control over
                                        the process.
                                    </span>
                                    <br /><br />
                                    <h5>Get your business website designed and developed from <strong style={{ color: "red" }}>SG Solutions</strong></h5>
                                    <div className="mt-3">
                                        <NavLink to="/websitServices" style={{ textDecoration: 'none' }} className="btn-get-started">Read more </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img style={{ textAlign: "center", width: "100%", paddingTop: "25px", height: "300px" }} src="https://www.devkiinfotech.com/images/website-design-development-services.png" alt="home img" />
                                </div>
                            </div> <br /><br /><br /><br />
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <h4>Search Engine Optimization (SEO)</h4>
                                    <span className="my-2">
                                        To make the results longer and effective, Our SEO services includes keywords research &
                                        analysis, Deciding keywords specific relevant meta tags, Content Creation and Content Marketing, Submission
                                        & Resubmission in High PR Directories, Qualified Business Listings, Powerful Link building,
                                        Competitors analysis, Keywords tracking after every 15 days,
                                        re-designing and implementing the SEO strategies based on the Live Results.
                                        In short, Most successful Online marketing tool is used to promote Small as well as established companies.
                                    </span> <br /><br />
                                    <h5>Get your business website appear on top of search list from <strong style={{ color: "red" }}>SG Solutions</strong></h5>
                                    <div className="mt-3">
                                        <NavLink to="/seoServies" style={{ textDecoration: 'none' }} className="btn-get-started">Read more</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img style={{ textAlign: "center", width: "100%", paddingTop: "25px", height: "300px" }} src="https://logique.s3.ap-southeast-1.amazonaws.com/2021/07/SEO.jpg" alt="home img" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
}

export default Products;