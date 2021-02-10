import React, { Component } from "react";
import Brand from "../src/assets/PizzeriaLogo.png";
import cart from "../src/assets/cart.png";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="header ">
          <div className="container-fluid ">
            <div className="navbar-header ">
              <Link to="/Body" className="navbar-brand ">
                Pizzeria
              </Link>
            </div>
            <ul className="nav navbar-nav colors">
              <li className="navbar-brand">
                <Link
                  to="/Body"
                  style={{
                    paddingTop: "3%",
                    paddingBottom: "8%",
                    paddingLeft: "4%",
                    paddingRight: "4%",
                  }}
                >
                  <img
                    src={Brand}
                    width="40"
                    height="30"
                    className="d-inline-block align-top "
                    alt="brand logo"
                  />
                </Link>
              </li>
              <li className="navbar-brand">
                <Link
                  to="/PizzaOrder"
                  style={{
                    paddingTop: "2%",
                    paddingBottom: "3%",
                    
                  }}
                >
                  Order Pizza
                </Link>
              </li>
              <li className="navbar-brand">
                <Link
                  to="/Toppings"
                  style={{
                    paddingTop: "2%",
                    paddingBottom: "3%",
                   
                  }}
                >
                  Build your Pizza
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/Cart">
                  <button
                    type="button"
                    className="btn btn-warning"
                    style={{
                      marginTop: "1rem",
                      marginRight: "1rem",
                      paddingTop: "2%",
                    }}
                  >
                    <img
                      src={cart}
                      alt="cart-logo"
                      style={{ height: "20px" }}
                    />{" "}
                    Shopping Cart
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
