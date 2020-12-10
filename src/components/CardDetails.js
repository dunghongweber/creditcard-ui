import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CardDetails extends Component {
  state = {
    id: null,
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

  handleDelete = () => {
    let deleteID = this.state.card._id;
    // console.log(typeof deleteID); //testing

    let confirmDelete = window.confirm(
      "Are you sure you want to delete this card?"
    );

    if (confirmDelete) {
      axios
        .delete("https://dh-react-card.herokuapp.com/delete/" + deleteID)
        .then((result) => {
          this.props.history.push("/"); //redirect to home
        });
    }
  };

  formatDate = (inputDate) => {
    let newDate = new Date(inputDate);
    return newDate.toDateString();
  };

  render() {
    const card = this.state.card ? (
      <div className="carddetails container card-panel blue lighten-5">
        <div className="row">
          {/* card image */}
          <div className="col s3">
            <img
              alt="cardicon"
              className="card-icon center responsive-img"
              src={this.state.card.picture}
            ></img>
          </div>
          {/* card issuer and name */}
          <div className="col s9">
            <div className="row">
              <div className="col s8">
                <h5>{this.state.card.name.toUpperCase()}</h5>
              </div>
              <div className="col s4">
                <Link
                  to={"/edit/" + this.state.card._id}
                  className="waves-effect waves-light btn blue right"
                >
                  <i className="material-icons">edit</i>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                <div>by: {this.state.card.issuer.toUpperCase()}</div>
              </div>
              <div className="col s4">
                <a
                  href="#!"
                  className="waves-effect waves-light btn red right tooltipped"
                  data-position="bottom"
                  data-tooltip="I am a tooltip"
                  onClick={this.handleDelete}
                >
                  <i className="material-icons">delete</i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <p>
            <strong>BENEFITS:</strong> <br />{" "}
            {this.state.card.benefit.toUpperCase()}
          </p>
        </div>
        <div className="row">
          <p>
            <strong>Created:</strong> <br />{" "}
            {this.formatDate(this.state.card.createdAt)}
          </p>
        </div>
      </div>
    ) : (
      <div className="center">Error, cannot fetch card data</div>
    );
    //after checking then return fetched data
    return <div className="container">{card}</div>;
  }
}

export default CardDetails;
