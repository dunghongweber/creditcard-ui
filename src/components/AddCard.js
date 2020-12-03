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
    });

    // e.target.reset();
    // alert("Card Added");
  };
  render() {
    return (
      <div className="AddCard container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="picture">Card Picture URL:</label>
          <input
            type="text"
            id="picture"
            className="validate"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="name">Card Name:</label>
          <input
            type="text"
            id="name"
            className="validate"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="issuer">Card Issuer:</label>
          <input
            type="text"
            id="issuer"
            className="validate"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="benefit">Card Benefit:</label>
          <input
            type="text"
            id="benefit"
            className="validate"
            required
            onChange={this.handleChange}
          />
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
