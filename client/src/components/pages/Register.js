import React, { Component } from "react";
// import  register  from "./UserFunctions";
import API from "../../utils/API";
import RegisterForm from "../RegisterForm";

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

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.email &&
      this.state.password &&
      this.state.first_name &&
      this.state.last_name
    ) {
      API.postUser({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.test())
        .catch(err => console.log(err));
    }
  };

  test = () => {
    alert("it worked shithead!");
  };

  render() {
    return <RegisterForm />;
  }
}

export default Register;
