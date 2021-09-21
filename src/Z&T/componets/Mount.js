import Axios from 'axios';
import React from 'react';

class Mount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            errormsg: ""
        }
    }

    componentDidMount() {
        this.getAlldetail()
    }

    getAlldetail() {
        let dataurl = 'https://jsonplaceholder.typicode.com/users';
        Axios.get(dataurl).then((response) => {
            this.setState(
                {
                    ...this.state,
                    users: response.data
                }
            )
        }).catch((error) => {
            this.setState(
                {
                    ...this.state,
                    errormsg: error
                }
            )
        })
    }
    render() {
        return (
            <React.Fragment>
                <section className="mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <h1>hello</h1>
                                    <p>this is my page</p>
                                    <div className="card-body">
                                        <pre>{JSON.stringify(this.state.users)}</pre>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <table className="table table-striped table-hover  justify-content-center text-center">
                                            <thead className="bg-dark text-white">
                                                <tr>
                                                    <th>id</th>
                                                    <th>name</th>
                                                    <th>username</th>
                                                    <th>email</th>
                                                    <th>username</th>
                                                    <th>address</th>
                                                    <th>phone</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody className="bg-light text-dark">
                                                {
                                                    this.state.users.map((users) => {
                                                        return (
                                                            <tr>
                                                                <td>{users.id}</td>
                                                                <td>{users.name}</td>
                                                                <td>{users.username}</td>
                                                                <td>{users.email}</td>
                                                                <td>{users.username}</td>
                                                                <td>{users.address.street}</td>
                                                                <td>{users.phone}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment >
        );
    };
};
export default Mount;







