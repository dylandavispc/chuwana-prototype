import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
// import  login  from "./UserFunctions";
import API from "../../../utils/API";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

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
    console.log(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = event => {
    event.preventDefault();

    console.log("handleSubmit");

    axios
      .post("/api/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        console.log(this.props);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/catalog"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h5 text-center mb-4">Sign in</p>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center">
                  <MDBBtn>Login</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    }
  }
}
export default Login;
