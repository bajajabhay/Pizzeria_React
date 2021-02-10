import React, { Component } from "react";
export class Body extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="abcd">Our Story</h1>
          <br />
          <div className="body">
            <p>
              We believe in good. We launched Fresh Pan Pizza Best Excuse Awards
              on our Facebook fan page. Fans were given situations where they
              had to come up with wacky and fun excuses. The person with the
              best excuse won the Best Excuse Badge and won Pizzeria's vouchers.
              Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza
              is the Tastiest Pan Pizza. Ever!
            </p>
            <p>
              Ever since we launched the Tastiest Pan Pizza, ever, people have
              not been able to resist the softest, cheesiest, crunchiest,
              butteriest Domino's Fresh Pan Pizza. They have been leaving the
              stage in the middle of a performance and even finding excuses to
              be disqualified in a football match.
            </p>
            <p>
              We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan
              page. Fans were given situations where they had to come up with
              wacky and fun excuses. The person with the best excuse won the
              Best Excuse Badge and won Domino's vouchers. Their enthusiastic
              response proved that Pizzeria's Fresh Pan Pizza is the Tastiest
              Pan Pizza. Ever!
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="Row">
            <div className="col-sm-1"></div>
            <div className="col-sm-4">
              <img
                src="https://image.shutterstock.com/image-photo/raw-dough-pizza-ingredients-spices-600w-526830277.jpg"
                width="300"
                height="300"
              />
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
              
              
              <h2 style={{ textAlign: "center" }}>Ingredients</h2>
              <br></br>
              
              <p className="styling">
                We're ruthless about goodness. We have no qualms about tearing
                up a day-old lettuce leaf (straight from the farm), or steaming
                a baby (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir.
                While they're still young and fresh - that's our motto. It makes
                the kitchen a better place.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <div className="Row">
            <div className="col-sm-5">
              <br></br>
              <h2 style={{ textAlign: "center" }}>Our Chefs</h2>
              <br></br>
              
              <p className="styling">
                They make sauces sing and salads dance. They create magic with
                skill, knowledge, passion, and stirring spoons (among other
                things). They make goodness so good, it doesn't know what to do
                with itself. We do though. We send it to you.
              </p>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <img
                src="https://image.shutterstock.com/image-photo/happy-chef-600w-437116033.jpg"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="Row">
          <div className="col-sm-1"></div>
            <div className="col-sm-4">
              <img
                src="https://image.shutterstock.com/image-photo/vintage-analog-kitchen-countdown-timer-260nw-669255388.jpg"
                width="300"
                height="300"
              />
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h3 style={{ textAlign: "centre" }}>45 Minutes Delivery</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
