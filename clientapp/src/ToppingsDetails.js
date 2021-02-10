import React, { Component } from "react";
import "./CartDetails.css";
// import { Button } from "react-bootstrap";
import {pass} from "./Model";
import Toppings from "./Toppings";
class ToppingsDetails extends Component {
    
    
    handleClick = (item) => {
        pass.deleteToppingDetails(item);
    };
    
    
  render() {
    var toppingitem = this.props.toppingitem;
    return (
      <div>
      
        <tr>
          <td>{toppingitem.tname}</td>
          <td>{toppingitem.price}</td>
          <td className="but-class">
            <button
              type="button"
              style={{ border: "0", color: "red" }}
              onClick={() => {
                this.handleClick(toppingitem);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
        <Toppings></Toppings>
      </div>
    );
  }
}

export default ToppingsDetails;
