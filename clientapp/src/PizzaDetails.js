import React, { Component } from "react";
import "./CartDetails.css";
import { Button } from "react-bootstrap";


class CartDetails extends Component {
  render() {
    var item = this.props.pizzaitem;
    return (
      <tr className="tableRow">
        <td className="firstCol">
          <img src={item.image} alt="pizza" />
        </td>
        <td className="secondCol">
          {item.type === "veg" ? (
            <div className="vegColor"></div>
          ) : (
            <div className="nonVegColor"></div>
          )}
        </td>
        <td className="thirdCol">
          <h5>
            <b>{item.name}</b>
          </h5>
          ₹ {item.price}
        </td>
        <td className="fourthCol">
          <Button>-</Button>
          <span className="quantity">3</span>
          <Button>+</Button>
        </td>
        <td className="fifthCol">
          <h4>₹ {item.price}</h4>
        </td>
        <td className="sixthCol">
          <i class="fas fa-trash-alt fa-lg"></i>
        </td>
      </tr>
    );
  }
}

export default CartDetails;
