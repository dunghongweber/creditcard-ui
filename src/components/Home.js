import React, { Component } from "react";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import axios from "axios";

class Home extends Component {
  //store data of all cards from API
  state = {
    cards: [],
    searchResult: null,
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

  handleSearch = (e) => {
    //using search bar to filter a search result set
    let searchResult = this.state.cards.filter((c) => {
      return c.name.includes(e.target.value.toUpperCase());
    });

    //update the search result set
    this.setState({
      searchResult: searchResult,
    });
  };

  render() {
    //Handle error when cannot connect database
    const cardsData = this.state.cards ? (
      <Cards
        cardsList={this.state.cards}
        cardSearch={this.state.searchResult}
      ></Cards>
    ) : (
      <div>
        <h5 className="center">Error, cannot fetch card data</h5>
      </div>
    );

    //display data and preloader if needed
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
          <div>
            <SearchBar handleSearch={this.handleSearch}></SearchBar>
            {cardsData}
          </div>
        )}
      </div>
    );
  }
}
export default Home;
