import React, { Component } from "react";
import Cards from "./Cards";
import axios from "axios";

class Home extends Component {
  //store data of all cards from API
  state = {
    cards: [],
  };
  componentDidMount() {
    axios.get("https://dh-react-card.herokuapp.com/all-cards").then((res) => {
      console.log(res);

      this.setState({
        cards: res.data,
      });
    });
  }

  render() {
    const cardsData = this.state.cards ? (
      <Cards cardsList={this.state.cards}></Cards>
    ) : (
      <div>
        <h1>Loading...</h1>
      </div>
    );

    return <div className="Home container row">{cardsData}</div>;
  }
}
export default Home;
