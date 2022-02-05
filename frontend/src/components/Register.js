import React, {Component} from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isRegistered: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8082/users/register', {
            id: Math.floor(Math.random() * 1000),
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }).then(resp => {
            console.log(resp.data);
            this.setState({isRegistered: true});
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        if (this.state.isRegistered) {
            return (
                <div className="content">
                    <div className="col-md-offset-1 col-md-10">
                        <h1>Account created</h1>
                    </div>
                </div>
            );
        }

        return (
            <div className="content">
                <div className="col-md-offset-1 col-md-10">
                    <h1>Register</h1>
                    <div className="col-sm-9">
                        <form className="form-horizontal" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                                <label htmlFor="register_username" className="control-label col-sm-3">Username</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           type="text"
                                           name="username"
                                           id="register_username"
                                           value={this.state.username}
                                           onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="register_firstName" className="control-label col-sm-3">First Name</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           type="text"
                                           name="firstName"
                                           id="register_firstName"
                                           value={this.state.firstName}
                                           onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="register_lastName" className="control-label col-sm-3">Last Name</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           type="text"
                                           name="lastName"
                                           id="register_lastName"
                                           value={this.state.lastName}
                                           onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="register_email" className="control-label col-sm-3">Email</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           type="text"
                                           name="email"
                                           id="register_email"
                                           onChange={this.handleChange}
                                           value={this.state.email}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="register_password" className="control-label col-sm-3">Password</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           type="password"
                                           name="password"
                                           id="register_password"
                                           onChange={this.handleChange}
                                           value={this.state.password}
                                    />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-success" style={{margin : '15px'}}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}