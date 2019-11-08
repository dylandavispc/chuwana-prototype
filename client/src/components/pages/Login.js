import React, { Component } from "react";
// import  login  from "./UserFunctions";
import API from "../../utils/API";
const bodyParser = require("body-parser")    
// const User = require("./models/user")
const LocalStrategy = require("passport-local")
// const passportLocalMongoose = require("passport-local-mongoose")

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.email && this.state.password) {
      API.loginUser({
        email: this.state.email,
        password: this.state.password
      })
      .then()
        
      .catch(err => console.log(err));;
    }
  };

  test = () => {
    alert("it worked shithead!")
  }



  render() {
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
                onClick={this.handleFormSubmit}
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

export default Login;
