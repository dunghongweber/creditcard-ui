import React, { Component } from "react";
import axios from "axios";
import qs from "qs";

class AddCard extends Component {
  state = {
    id: null,
    name: null,
    benefit: null,
    picture: null,
    issuer: null,
    // category: null,
    // type: null,
    // openOn: null,
    // stopUsageOn: null,
    // closingStatementDate: null,
    // redeemMin: null,
    // waive: null,
    // benefits: [],
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    // console.log(this.state); //testing

    axios({
      method: "POST",
      url: "https://dh-react-card.herokuapp.com/new",
      data: qs.stringify({
        benefit: this.state.benefit.toUpperCase(),
        issuer: this.state.issuer.toUpperCase(),
        name: this.state.name.toUpperCase(),
        picture: this.state.picture,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((result) => {
      // console.log(result); //log info for testing

      e.target.reset(); //reset all inputs
      alert("Card Added"); //pop up alert

      this.props.history.push("/"); //redirect to home
    });
  };
  render() {
    return (
      <div className="AddCard container">
        <h4 className="center blue-text text-accent-4">New Card</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="Please provide a url from google image for the picture of the card"
                type="text"
                id="picture"
                className="validate col s6"
                required
                onChange={this.handleChange}
              />
              <label htmlFor="picture">Card Picture URL:</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s8">
              <i class="material-icons prefix">assignment</i>
              <label htmlFor="name">Card Name:</label>
              <input
                type="text"
                id="name"
                className="validate"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field col s4">
              <i class="material-icons prefix">account_balance</i>
              <label htmlFor="issuer">Card Issuer:</label>
              <input
                type="text"
                id="issuer"
                className="validate"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i class="material-icons prefix">card_giftcard</i>
              <label htmlFor="benefit">Card Benefit:</label>
              <input
                type="text"
                id="benefit"
                className="validate"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button
            className="btn waves-effect waves-light blue"
            type="submit"
            name="action"
          >
            Add Card
            <i className="material-icons right">add</i>
          </button>
        </form>
      </div>
    );
  }
}

export default AddCard;
