import React, {Component} from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('http://localhost:8082/users')
            .then(response => response.json())
            .then(data => this.setState({users: data, isLoading: false}));
    }

    render() {
        const {users, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="content">
                <div className="col-md-offset-1 col-md-10">
                    <h1>List of users</h1>

                    <div className="occurrences-template">
                        <table className="table table-striped table-bordered starter-template">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Username</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.map(function(item, key) {
                                    return (
                                        <tr key = {key}>
                                            <td>{item.id}</td>
                                            <td>{item.username}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                        </tr>
                                    )
                                }.bind(this))
                            }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}


export default Users;