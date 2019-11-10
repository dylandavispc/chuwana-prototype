import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/pages/Landing/Landing";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import axios from 'axios'

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     loggedIn: false,
  //     username: null
  //   }

  //   this.getUser = this.getUser.bind(this)
  //   this.componentDidMount = this.componentDidMount.bind(this)
  //   this.updateUser = this.updateUser.bind(this)
  // }

  // componentDidMount() {
  //   this.getUser()
  // }

  // updateUser (userObject) {
  //   this.setState(userObject)
  // }

  // getUser() {
  //   axios.get('/user/').then(response => {
  //     console.log('Get user response: ')
  //     console.log(response.data)
  //     if (response.data.user) {
  //       console.log('Get User: There is a user saved in the server session: ')

  //       this.setState({
  //         loggedIn: true,
  //         username: response.data.user.username
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         username: null
  //       })
  //     }
  //   })
  // }

  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/profile" component={Profile} /> */}
      </div>
    </Router>
    )
  };
}

export default App;
