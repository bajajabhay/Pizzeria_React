import { Component } from "react";
import axios from "axios";
import "./Toppings.css";
import { pass } from "./Model";
import ToppingsDetails from "./ToppingsDetails";
import { NavLink } from "react-router-dom";

export default class Toppings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tops: [],
      toppingdetails: [],
      cost: 0,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/pizza/toppings`)
      .then((response) => {
        console.log(response);
        this.setState({ toppingdetails: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleCheck = (e, p) => {
    if (e.target.checked) {
      pass.setIngredients(p);
      this.setState({
        cost: this.state.cost + p.price,
      });
    } else {
        
      this.setState({
        cost: this.state.cost - p.price,
      });
    }
  };
  buttonClickHandler() {
    pass.setTotalIngredients(this.state.cost);
  }

  render() {
    return (
      <div>
        <p className="info_text">
          Pizzeria now gives you options to build your own pizza. Customize your
          pizza by choosing ingredients from the given list.
        </p>
        <div>
          <table
            className="table_body table-striped table-bordered"
            width="100px"
          >
            <tbody>
              {this.state.toppingdetails.map((obj) => (
                <tr key={obj.id}>
                  <td className="cell_padding">
                    <img src={obj.image} height="45px" width="45px" />
                  </td>
                  <td className="cell_padding">
                    <b>{obj.tname}</b>
                  </td>
                  <td className="cell_padding">
                    <b>&#x20B9;</b>
                    {obj.price}
                  </td>
                  <td className="test">
                    <input
                      type="checkbox"
                      defaultValue="false"
                      onChange={(e) => this.handleCheck(e, obj)}
                    />

                    <span
                      style={{ paddingLeft: "1rem", color: "orange" }}
                      className="marker_color"
                    >
                      Add
                    </span>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4">
                  <div>
                    <h5 style={{ color: "darkslateblue" }}>
                      <b>TOTAL COST:</b>
                      {this.state.cost}
                    </h5>
                  </div>
                  <div className="text-center">
                    <NavLink to="/Cart">
                      <button
                        className="btn btn-primary dam"
                        style={{ background: "black" }}
                        type="button"
                        onClick={() => this.buttonClickHandler()}
                      >
                        <h5 style={{ color: "orange" }}>Build Your Pizza</h5>
                      </button>
                    </NavLink>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
