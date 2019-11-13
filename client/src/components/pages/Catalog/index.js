import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import API from "../../../utils/API.js"
import "./style.css"
import { MDBInput, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";
import MetisMenu from 'react-metismenu';
import Footer from '../../Footer'
import {CatalogCards, CatalogList } from '../../CatalogCards'

const content=[
  {
      icon: 'icon-class-name',
      label: 'Account Page',
      to: '#a-link',
  },
  {
      icon: 'icon-class-name',
      label: 'Pieces',
      content: [
          {
              icon: 'icon-class-name',
              label: 'Sub Menu of Second Item',
              to: '#another-link',
          },
      ],
  },
  {
    icon: 'icon-class-name',
    label: 'Second Item',
    content: [
        {
            icon: 'icon-class-name',
            label: 'Sub Menu of Second Item',
            to: '#another-link',
        },
    ],
},
{
  icon: 'icon-class-name',
  label: 'Second Item',
  content: [
      {
          icon: 'icon-class-name',
          label: 'Sub Menu of Second Item',
          to: '#another-link',
      },
  ],
},
];

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0,
      products: []
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.loadProducts();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  loadProducts = () => {
    API.getProducts()
      .then(res => this.setState({ products: res.data }))
      .then(res => console.log(res.data))
      .then(console.log(this.state))
      .catch(err => console.log(err));
  };

  
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

    return (
      <Router>
        
        <div className="fixed-sn light-blue-skin">
        <MetisMenu content={content} activeLinkFromLocation />
          <MDBNavbar style={navStyle} color="unique-color" double expand="md" fixed="top" dark scrolling>
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
                  <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Support</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Account</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
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
              <br />
              {!this.state.products.length ? (
                <h1 className="text-center">No Products to Display</h1>
              ) : (
                <CatalogList>
                  {this.state.products.map(product => {
                    return (
                      <CatalogCards
                        // key={product.name}
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
    );
  }
}

export default Catalog;