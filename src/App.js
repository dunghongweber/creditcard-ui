import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddCard from "./components/AddCard";
import CardDetails from "./components/CardDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/creditcard-ui/" component={Home}></Route>
          <Route path="/creditcard-ui/add" component={AddCard}></Route>
          <Route path="/creditcard-ui/:card_id" component={CardDetails}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
