import React, {Component} from 'react';
import { NavLink} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="col-md-10 col-md-offset-1">
                    <div className="col-sm-8 col-md-8">
                        <h1>Bookstore</h1>
                    </div>
                    <div className="col-sm-8 col-md-8">
                        <nav className="navbar">
                            <ul className="navbar-nav navbar-right">
                                <li className="register"><NavLink to="/register">Register</NavLink></li>
                                <li className="login"><NavLink to="/login">Login</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}
