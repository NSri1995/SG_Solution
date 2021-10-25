import React from 'react';
import './Navbar.css';
import seoStrat from './images/seoStrat.jpg';
import SEOAbout from './images/SEOAbout.jpg';

function SEOServices(props) {
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
                                        We can build a great website and implement and develop a
                                        targeted SEO strategy, applying our tried and true set of
                                        search engine optimization services to your site. We look to
                                        encompass all pieces of the SEO optimization puzzle. SEO Inc
                                        works relentlessly to get brand mentions, shares, repost’s,
                                        reviews, recommendations, and content picked up by 3rd party
                                        sites. Our campaigns and professional SEO service are all tailored
                                        to your long-term success. We do think in short-term gains,
                                        and we aim to supply each client with a sound well thought
                                        out strategy to increase visibility for years to come.
                                        Professional SEO services are done by our SEO Agency
                                        that pushes the envelope for all of our clients.
                                    </p>
                                    <p>
                                        we use our time-tested and thorough forecasting method to see exactly
                                        where we can help to give you realistic and achievable results.
                                        We will carefully research every channel where your brand could be
                                        talked about and implement the best SEO optimization strategy for each outlet.
                                        Using the SEO services from SG Solutions gives our clients air-tight search engine
                                        optimization strategies that continue to perform year after year.
                                        We do not provide customers with an irrelevant or
                                        outdated plan, we only supply high-quality content,
                                        and on-page search engine optimization techniques that have resulted in
                                        millions of dollars’ worth of revenue for our clients.

                                    </p>
                                    <br />

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img style={{ width: "450px", paddingTop: "35px", height: "550px" }} src={SEOAbout} alt="seoAbout img" />
                                </div>
                            </div>  <br />
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <h4>Our Strategy</h4>
                                    <p>
                                        A comprehensive site audit and a well-designed SEO optimization
                                        strategy are crucial to the success of your website.
                                        Our process begins by understanding how your site works,
                                        what your competition looks like, and what your industry
                                        search trends necessitate. Our SEO experts will select the
                                        right set of search engine optimization services and craft a
                                        custom website optimization campaign for your business, so you
                                        receive a high level of exposure from industry-relevant sources.
                                        Our Search Engine Optimizers organize your search engine marketing
                                        campaign to ensure your businesses brand starts on the right
                                        foot and continues to generate interest across the internet.
                                        Once that conversation begins on the Internet, it’s hard to
                                        stop it and we are there to make sure the discussions end up on
                                        your website.
                                    </p>
                                    {/* <div className="mt-3">
                                        <NavLink to="/services" style={{ textDecoration: 'none' }} className="btn-get-started">Get started</NavLink>
                                    </div> */}
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img style={{ width: "450px", paddingTop: "35px", height: "350px" }} src={seoStrat} alt="seoStrat img" />
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
}

export default SEOServices;