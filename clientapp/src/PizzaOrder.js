import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./Item";
//import pass from "./Model";


export class PizzaOrder extends Component {
  
    constructor(props) {
      super(props)
      
      this.state = {
        pizza_details: [],
        price: "",
        value: 0,
      };
    }
    

  componentDidMount(){
    axios
      .get(`http://localhost:4000/pizza/pizza_details`)
      .then((response) => {
        this.setState({ pizza_details: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

    render() {
    return (
      <div>
      
        <Container style={{marginTop:"3%", marginBottom:"5%"}}>
          <Row>
            {this.state.pizza_details.map((item)=>{
                return(
                   <Col xs={12} sm={12} md={12} lg={6} xl={6} key={item.id}>
                <Item item={item} />
              </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    )
  }
}

export default PizzaOrder
