import React, { Component } from "react";
import { pass } from "./Model";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: pass.getCart(),
      count: 0,
      total: pass.gettotalCostOrder(),
      ingredients: pass.getIngredients(),
      ingredientsCost: pass.getTotalIngredients(),
      totalCost: pass.getTotalCost(),
      tick: true,
      check: true,
    };
  }
  clickEventHandle = (dprod) => {
    this.setState({
      cart: pass.deleteCart(dprod),
      total: pass.getTotal(),
      totalCost: pass.gettotalCostOrder() + this.state.ingredientsCost,
    });
    console.log(this.state.cart);
  };

  incrementCount(i) {
    const temp = this.state.cart.map((c) => {
      if (c.id === i.id) {
        c.count++;
      }
      return c;
    });

    this.setState({
      cart: temp,
      total: pass.getIncrement(i),
      totalCost: pass.gettotalCostOrder() + this.state.ingredientsCost,
    });

    console.log(this.state.cart);
  }

  decrementCount(pr) {
    const temp = this.state.cart.map((c) => {
      if (c.id === pr.id && c.count !== 0) {
        c.count--;
      }
      return c;
    });

    this.setState({
      cart: temp,
      total: pass.getDecrement(pr),
      totalCost: pass.gettotalCostOrder() + this.state.ingredientsCost,
    });

    if (pr.count === 0) {
      this.setState({
        cart: pass.deleteCart(pr),
      });
    }
  }

  renderSidePanel = () => {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">PIZZA</div>
          <div className="col-md-6"></div>
          <div className="col-md-2">
            <strong>₹{this.state.total}</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">Ingredients</div>
          <div className="col-md-6">
            <select>
              {this.state.ingredients.map((ing, i) => (
                <option key={i}>{ing.tname}</option>
              ))}
            </select>
          </div>
          <div className="col-md-2">
            <strong>₹{this.state.ingredientsCost}</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">TOTAL</div>
          <div className="col-md-6"></div>
          <div className="col-md-2">
            <strong>₹{this.state.totalCost}</strong>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const mainTable = this.state.cart.map((prod, i) => {
      return (
        <tr key={i}>
          <td width="20%">
            <img src={prod.image} alt="" width="40%" />
          </td>
          {prod.type === "veg" ? (
            <td className="cell">
              <img
                src="https://png.pngitem.com/pimgs/s/151-1515150_veg-icon-png-circle-transparent-png.png"
                height="30px"
                width="30px"
                alt=""
              />
            </td>
          ) : (
            <td className="cell">
              <img
                src="https://img.icons8.com/fluent/2x/non-vegetarian-food-symbol.png"
                height="34px"
                width="34px"
                alt=""
              />
            </td>
          )}
          <td>
            <div>{prod.name}</div>
            <div>₹{prod.price}</div>
          </td>
          <td>
            <button
              className="buts"
              type="button"
              onClick={() => this.incrementCount(prod)}
              style={{
                height: "30px",
                width: "30px",
                marginLeft: "10px",
              }}
            >
              <b style={{ color: "white" }}>+</b>
            </button>
          </td>
          <td style={{ textAlign: "center" }}>{prod.count}</td>
          <td>
            <button
              className="buts"
              onClick={() => this.decrementCount(prod)}
              type="button"
              style={{
                height: "30px",
                width: "30px",
                marginRight: "10px",
                marginLeft: "29px",
              }}
            >
              <b style={{ color: "white" }}>-</b>
            </button>
          </td>
          <td>
            <strong>₹{prod.price * prod.count}</strong>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.clickEventHandle(prod)}
            >
              <RiDeleteBin6Line
                style={{ color: "black" }}
                className="float-bottom"
              />
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="mt-4 col-xs-8 col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">My Cart</div>
              <div className="panel-body">
                <table>
                  <tbody>{mainTable}</tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">The total amount of </div>
              <div className="panel-body" style={{ padding: "20px" }}>
                {this.renderSidePanel()}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-2 cl-md-2"></div>
              <NavLink to="/Pay">
                <button className="col-xs-4 col-md-4 btn btn-warning">
                  Pay
                </button>
              </NavLink>
              <NavLink to="/Clear">
                <button className="col-xs-4 col-md-4 btn btn-dark">
                  Clear
                </button>
              </NavLink>
              <div className="col-xs-2 cl-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
