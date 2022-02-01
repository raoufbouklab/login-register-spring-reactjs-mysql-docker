import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="col-md-10 col-md-offset-1">
                    <nav className="navbar">
                        <ul className="navbar-nav navbar-default navbar-nav">
                            <li className="home"><NavLink to="/">Home</NavLink></li>
                            <li className="home"><NavLink to="/users">Users</NavLink></li>
                            <li className="about"><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
