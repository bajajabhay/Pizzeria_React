import "./App.css";
import Navbar from "./Navbar";
import FooterPage from "./FooterPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Toppings from "./Toppings";
import Body from "./Body";
import PizzaOrder from "./PizzaOrder";
import Cart from "./Cart";
import Pay from "./Pay";
import Clear from "./Clear";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Body}></Route>
          <Route path="/Toppings">
            <Toppings />
          </Route>
          <Route path="/PizzaOrder">
            <PizzaOrder />
          </Route>
          <Route path="/Body">
            <Body />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Pay">
            <Pay />
          </Route>

          <Route path="/Clear">
            <Clear/>
          </Route>
        </Switch>
        <FooterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
