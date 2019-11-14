import React, { Component } from "react";
// import  register  from "./UserFunctions";
import "./Register.css";
import API from "../../../utils/API";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // onSubmit(e) {
  //   e.preventDefault();

  //   const newUser = {
  //     first_name: this.state.first_name,
  //     last_name: this.state.last_name,
  //     email: this.state.email,
  //     password: this.state.password
  //   };

  //   register(newUser).then(res => {
  //     API.postUser()
  //     // this.props.history.push(`/login`);
  //   });
  // }

  onSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.postUser({
        email: this.state.email,
        password: this.state.password
      })
        .then(response => {
          console.log(response);
          if (!response.data.errmsg) {
            console.log("successful signup");
            this.setState({
              //redirect to login page
              redirectTo: "/login"
            });
          } else {
            console.log("username already taken");
          }
        })
        .catch(error => {
          console.log("signup error: ");
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div class="bg-img">
        <form class="container">
          <h1>Register</h1>

          <label for="email">
            <b>Email</b>
          </label>
          <input
            placeholder="Enter Email"
            name="email"
            required
            type="email"
            className="form-control"
            value={this.state.email}
            onChange={this.onChange}
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
          />

          <button
            type="submit"
            class="btn"
            onClick={this.onSubmit}
            disabled={!(this.state.email && this.state.password)}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
