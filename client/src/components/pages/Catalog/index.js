import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import API from "../../../utils/API.js";
import "./style.css";
import {
  MDBInput,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBSideNavItem,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBContainer
} from "mdbreact";
import MetisMenu from "react-metismenu";
import Footer from "../../Footer";
import { CatalogCards, CatalogList } from "../../CatalogCards";

const content = [
  {
    icon: "icon-class-name",
    label: "Account Page",
    to: "/catalog"
  },
  {
    icon: "icon-class-name",
    label: "Bongs",
    content: [
      {
        icon: "icon-class-name",
        label: "Carburetor Bongs",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Multi-Chamber Bong",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Percolator Bong",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Gravity bongs",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Novelty Bongs",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Cleaning",
        to: "#another-link"
      }
    ]
  },

  {
    icon: "icon-class-name",
    label: "Dab Rigs",
    content: [
      {
        icon: "icon-class-name",
        label: "Rigs",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Novelty Rigs",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Nails",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "E-nails & E-rigs",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Dabbers",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Dabbing Adapters",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Torches",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Extractors",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Cleaning",
        to: "#another-link"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Vaporizors",
    content: [
      {
        icon: "icon-class-name",
        label: "Dry Herb Vaporizers",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Wax & Oil Vapes",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Vape Batteries",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Atomizers & Cartridges",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Infusers & Extractors",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Vape Accessories",
        to: "#another-link"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Pipes",
    content: [
      {
        icon: "icon-class-name",
        label: "Bowls",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Bubblers",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Chillums & Dugouts",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Glass Blunts",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Novelty Pipes",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Pipe Accessories",
        to: "#another-link"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Rolling Supplies",
    content: [
      {
        icon: "icon-class-name",
        label: "Rolling Papers",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Blunt Wraps",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Rolling Trays",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Rolling Machines",
        to: "#another-link"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Accessories",
    content: [
      {
        icon: "icon-class-name",
        label: "Grinders",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Lighters & Hempwick",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Candles & Odor Eliminators",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Scales",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Smell Proof Storage",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Ashtrays",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Travel Bags & Cases",
        to: "#another-link"
      }
    ]
  }
];



class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0,
      redirectTo: null,
      catalog: "bongs",
      products: [],
      filteredProducts: []
    };

<<<<<<< HEAD
    this.logout = this.logout.bind(this);
=======
    this.logout = this.logout.bind(this)
    this.filter = this.filter.bind(this)
>>>>>>> e349b21f2787186fadf5a77674fd353800993ae6
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.loadProducts();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }


  filter = () => {
    console.log("filtering...")
    // console.log(products)
    var type=["bongs"]
    var records = this.state.products
    var typeObj={};
    type.forEach(function(element) {
    typeObj[element]=true;
    });
    var filteredArray=[];
    records.forEach(function(element) {
    if(typeObj[element.type])
        filteredArray.push(element)
    })
    // console.log(filteredArray)
    this.setState({ filteredProducts: filteredArray})
    console.log(this.state.filteredProducts)
    console.log("filter complete!")
    }

  loadProducts = () => {
    API.getProducts()
      .then(res => this.setState({ products: res.data }))
      // .then(res => console.log(res.data))
      .then(setTimeout(() => {
        console.log(this.state.products)
        // this.filter(this.state.products)
      }, 1000))
      .then(console.log(this.state))
      .catch(err => console.log(err));
  };

  logout(event) {
    this.setState({
      redirectTo: "/login"
    });
    // console.log('logging out')
    // axios.post('/user/logout').then(response => {
    //   console.log(response.data)
    //   console.log("logging out")
    //   if (response.status === 200) {
    //     this.props.updateUser({
    //       loggedIn: false,
    //       email: null
    //     })

    //   }
    // }).catch(error => {
    //     console.log('Logout error')
    // })
  }

<<<<<<< HEAD
=======
  
  
>>>>>>> e349b21f2787186fadf5a77674fd353800993ae6
  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };

  render() {
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
    };

    const mainStyle = {
      margin: "0 6%",
      paddingTop: "5.5rem",
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
    };

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Router>
          <div className="fixed-sn light-blue-skin">
            <img
              className="mockLogo"
              src="https://www.stickpng.com/assets/images/58499e38b89d73775876620e.png"
            />
            <MetisMenu
              className="metismenu1"
              content={content}
              activeLinkFromLocation
            />
            <MDBNavbar
              id="navCat"
              style={navStyle}
              color="light-green darken-2"
              double
              expand="md"
              fixed="top"
              dark
              scrolling
            >
              <MDBNavbarNav left>
                <MDBNavItem>
                  <div
                    onClick={this.handleToggleClickA}
                    key="sideNavToggleA"
                    style={{
                      lineHeight: "32px",
                      marginRight: "1em",
                      verticalAlign: "middle"
                    }}
                  >
                    <MDBIcon icon="bars" color="white" size="2x" />
                  </div>
                </MDBNavItem>
                <MDBNavItem
                  className="d-none d-md-inline white-text"
                  style={{ paddingTop: 5 }}
                >
<<<<<<< HEAD
                  Chuana Catalog
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right style={specialCaseNavbarStyles}>
                <MDBNavItem active>
                  <MDBNavLink to="#!">
                    <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                    <div className="d-none d-md-inline">Contact</div>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">
                    <MDBIcon
                      fas
                      icon="shopping-cart"
                      className="d-inline-inline"
                    />{" "}
                    <div className="d-none d-md-inline">Cart</div>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Account</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right>
                      <MDBDropdownItem href="#!">Account Page</MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Account Settings
                      </MDBDropdownItem>
                      <MDBDropdownItem onClick={this.logout}>
                        Logout
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBNavbar>
            <main style={mainStyle}>
              <MDBContainer fluid style={{ height: 2000 }} className="mt-5">
                <h2>Products:</h2>
                <div></div>
                <br />
                {!this.state.products.length ? (
                  <h1 className="text-center">No Products to Display</h1>
                ) : (
                  <CatalogList>
                    {this.state.products.map(product => {
                      return (
                        <CatalogCards
                          key={product.name}
                          name={product.name}
                          catagory={product.catagory}
                          disc={product.disc}
                          price={product.price}
                        />
                        // <li>{product.name}</li>
                      );
                    })}
                  </CatalogList>
                )}
              </MDBContainer>
            </main>
            <div>
              <Footer />
            </div>
          </div>
        </Router>
      );
    }
=======
                  <MDBIcon icon="bars" color="white" size="2x" />
                </div>
              </MDBNavItem>
              <MDBNavItem className="d-none d-md-inline white-text" style={{ paddingTop: 5 }}>
                Chuana Catalog
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right style={specialCaseNavbarStyles}>
              <MDBNavItem active>
                <MDBNavLink to="#!">
                  <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Contact</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">
                  <MDBIcon fas icon="shopping-cart" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Cart</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Account</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right>
                    <MDBDropdownItem onClick={this.filter}>Account Page</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Account Settings</MDBDropdownItem>
                    <MDBDropdownItem onClick={this.logout}>Logout</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
          <main style={mainStyle}>
            <MDBContainer fluid style={{ height: 2000 }} className="mt-5">
              <h2>
                Products:
              </h2>
              <div>
                
              </div>
              <br />
              {!this.state.filteredProducts.length ? (
                <h1 className="text-center">No Products to Display</h1>
              ) : (
                <CatalogList>
                  {this.state.filteredProducts.map(product => {
                    return (
                      <CatalogCards
                        key={product.name}
                        name={product.name}
                        catagory={product.catagory}
                        disc={product.disc}
                        price={product.price}
                      />
                      // <li>{product.name}</li>
                    );
                  })}
                </CatalogList>
              )}
              
            </MDBContainer>
          </main>
          <div><Footer /></div>
        </div>
        
      </Router>
    )};
>>>>>>> e349b21f2787186fadf5a77674fd353800993ae6
  }
}

export default Catalog;
