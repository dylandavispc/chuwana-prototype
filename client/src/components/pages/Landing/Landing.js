import React, { Component } from "react";
import API from "../../../utils/API";
// import ls from "local-storage";

class Landing extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    // ls.get("id");
    // this.loginGuest();
    this.loadProducts();
  }

  // loginGuest = () => {
  //   this.setState({
  //     // ls.set('key', 'value')
  //   })
  //   if (!guestId) {
  //     ls.set('key', 'value')
  //     // localStorage.setItem()
  //   }
  // }

  loadProducts = () => {
    API.getProducts()
      .then(res => this.setState({ products: res.data }))
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
            <div>
              {this.state.products.length ? (
                <ul>
                  {this.state.products.map(product => {
                    return <li>{product.name}</li>;
                  })}
                </ul>
              ) : (
                <h3>No results to display</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
