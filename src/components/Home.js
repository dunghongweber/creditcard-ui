import React, { Component } from "react";
import Cards from "./Cards";
import axios from "axios";

class Home extends Component {
  //store data of all cards from API
  state = {
    cards: [],
    loading: true,
  };
  componentDidMount() {
    axios.get("https://dh-react-card.herokuapp.com/all-cards").then((res) => {
      // console.log(res); //testing response

      this.setState({
        cards: res.data,
        loading: false,
      });
    });
  }

  render() {
    const cardsData = this.state.cards ? (
      <Cards cardsList={this.state.cards}></Cards>
    ) : (
      <div>
        <h5 className="center">Error, cannot fetch card data</h5>
      </div>
    );

    return (
      <div className="Home container row">
        {this.state.loading ? (
          <div>
            <h5 className="center">Loading...</h5>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          </div>
        ) : (
          cardsData
        )}
      </div>
    );
  }
}
export default Home;
