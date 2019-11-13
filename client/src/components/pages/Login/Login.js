import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// import  login  from "./UserFunctions";
import API from "../../../utils/API";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: "",
      password: "",
      redirectTo: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    console.log(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = event => {
    event.preventDefault();

    console.log('handleSubmit')

    axios
        .post('/api/users/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            console.log('login response: ')
            console.log(response)
            console.log(this.props)
            if (response.status === 200) {
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    email: response.data.email
                })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/catalog'
                })
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);
            
        })

  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
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
                onClick={this.onSubmit}
                disabled={!(this.state.email && this.state.password)}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
}
export default Login;
