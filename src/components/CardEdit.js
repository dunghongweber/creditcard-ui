import React, { Component } from "react";
import axios from "axios";
import qs from "qs";

class CardEdit extends Component {
  state = {
    id: null,
    benefit: null,
    // name: null,
    // picture: null,
    // issuer: null,
    // category: null,
    // type: null,
    // openOn: null,
    // stopUsageOn: null,
    // closingStatementDate: null,
    // redeemMin: null,
    // waive: null,
    // benefits: [],
    card: null,
  };

  componentDidMount() {
    let id = this.props.match.params.card_id;

    // console.log(id); //testing id

    axios
      .get("https://dh-react-card.herokuapp.com/detail/" + id)
      .then((res) => {
        // console.log(res); //testing response

        this.setState({ card: res.data, id: id });
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state); //testing

    let updateID = this.state.card._id;
    // console.log(updateID); //testing

    axios({
      method: "PUT",
      url: "https://dh-react-card.herokuapp.com/edit/" + updateID,
      data: qs.stringify({
        benefit: this.state.benefit.toUpperCase(),
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((result) => {
      e.target.reset();
      alert("Card Updated");

      this.props.history.push("/" + updateID); //redirect to home
    });
  };
  render() {
    const dataLoaded = this.state.card ? (
      <div>
        <h4 className="center blue-text text-accent-4">Edit Card</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s12">
              <img
                alt="cardicon"
                className="card-icon center responsive-img"
                src={this.state.card.picture}
              ></img>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s8">
              <i className="material-icons prefix">assignment</i>
              <input
                disabled
                type="text"
                id="name"
                className="validate"
                value={this.state.card.name.toUpperCase()}
              />
            </div>
            <div className="input-field col s4">
              <i className="material-icons prefix">account_balance</i>
              <input
                disabled
                type="text"
                id="name"
                className="validate"
                value={this.state.card.issuer.toUpperCase()}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">card_giftcard</i>
              <input
                autoFocus
                type="text"
                id="benefit"
                className="validate"
                placeholder={this.state.card.benefit.toUpperCase()}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="benefit">Card Benefit:</label>
            </div>
          </div>

          <button
            className="btn waves-effect waves-light blue"
            type="submit"
            name="action"
          >
            Update Card
            <i className="material-icons right">sync</i>
          </button>
        </form>
      </div>
    ) : (
      <div className="center">Error, cannot fetch card data</div>
    );
    return <div className="AddCard container">{dataLoaded}</div>;
  }
}

export default CardEdit;
