import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLogin: false,
            isUserNotExist: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8082/users/login', {
                    username: this.state.username,
                    password: this.state.password})
                    .then(resp => {
                                console.log(resp.data);
                                this.setState({isLogin: true});
                            }).catch(error => {
                                console.log(error);
                                this.setState({isUserNotExist: true})
                            });

    }

    render() {
        if (this.state.isLogin) {
            return (
                <div className="content">
                    <div className="col-md-offset-1 col-md-10">
                        <h1>Login successful!</h1>
                    </div>
                </div>
            );
        } 
            
        if (this.state.isUserNotExist) {
            return (
                <div className="content">
                    <div className="col-md-offset-1 col-md-10">
                        <h1>User does not exist!</h1>
                    </div>
                </div>
            );
        }
               
        return (
            <div className="content">
                <div className="col-md-offset-1 col-md-10">
                    <h1>Login</h1>
                    <div className="col-sm-9">
                        <form className="form-horizontal" onSubmit={this.handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="signin_username" className="control-label col-sm-3">Username</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           type="text"
                                           name="username"
                                           id="signin_username"
                                           value={this.state.username}
                                           onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="signin_password" className="control-label col-sm-3">Password</label>
                                <div className="col-sm-9">
                                    <input className="form-control"
                                           type="password"
                                           name="password"
                                           id="signin_password"
                                           onChange={this.handleChange}
                                           value={this.state.password}
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="btn btn-success" style={{margin : '15px'}}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}