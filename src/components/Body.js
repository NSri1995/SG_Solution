import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route, Redirect } from 'react-router-dom';
import './Body.css';
import Home from './Home'
import About from './About'
import ContactEmail from './ContactEmail'
import Navbar from './Navbar'
import Products from './Products'
import DigitalMarketing from './DigitalMarketing';
import SEOServices from './SEOServices';
import WebsiteServices from './WebsiteServices';

class Body extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className='bodyContent'>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/home" component={Home}></Route>
                        <Route exact path="/aboutUs" component={About}></Route>
                        <Route exact path="/contactUs" component={ContactEmail}></Route>
                        <Route exact path="/services" component={Products}></Route>
                        <Route exact path="/websitServices" component={WebsiteServices}></Route>
                        <Route exact path="/digitalServices" component={DigitalMarketing}></Route>
                        <Route exact path="/seoServies" component={SEOServices}></Route>
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </>
        );
    }
}

export default Body;
