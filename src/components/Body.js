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
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </>
        );
    }
}

export default Body;
