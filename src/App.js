import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddCard from "./components/AddCard";
import CardDetails from "./components/CardDetails";
import CardEdit from "./components/CardEdit";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/add" component={AddCard}></Route>
          <Route path="/edit/:card_id" component={CardEdit}></Route>
          <Route path="/:card_id" component={CardDetails}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
