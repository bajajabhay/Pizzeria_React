import React, { Component } from "react";
import pic from "../src/assets/Clear.jpg";
import { NavLink } from "react-router-dom";
export class Clear extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "center", paddingTop: "1rem", width: "100%" }}>
          <img src={pic} />
        </div>
        
        <div class="container1">
          <div class="center1">
            <NavLink to="/Body">
              <button className="btn btn-danger">GO TO HOME</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Clear;
