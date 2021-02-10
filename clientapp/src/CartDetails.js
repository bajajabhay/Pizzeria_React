import React, { Component } from "react";
import "./CartDetails.css";

class CartDetails extends Component {
  render() {
    var item = this.props.item;
    return (
      <tr>
        <td style={{ width: "100px", textAlign: "center" }}>
          <img src={item.image} alt="pizza" />
        </td>
        <td style={{ width: "50px" }}>
          {item.type === "veg" ? (
            <div className="vegColor" style={{ paddingBottom: "5%" }}></div>
          ) : (
            <div className="nonVegColor"></div>
          )}
        </td>
        <td>{item.price}</td>
      </tr>
    );
  }
}

export default CartDetails;
