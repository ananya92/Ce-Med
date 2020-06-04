import React, { Component } from 'react'
import API from "../utils/API"

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',

            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            username: this.state.username,
            password: this.state.password
        }

        API.register(newUser).then(res => {
            window.location.replace("/");
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">User Register</h1>
                            <div className="form-group">
                                <label htmlFor="email">User Name</label>
                                <input
                                    type="username"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter User Name"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block"
                            >
                                Register
              </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
