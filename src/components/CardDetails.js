import React, { Component } from "react";
import axios from "axios";

class CardDetails extends Component {
  state = {
    id: null,
    card: null,
  };
  componentDidMount() {
    let id = this.props.match.params.card_id;

    console.log(id);

    axios
      .get("https://dh-react-card.herokuapp.com/detail/" + id)
      .then((res) => {
        console.log(res);
        this.setState({ card: res.data, id: id });
      });

    this.setState({
      //   id: id,
    });
  }
  handleDelete = () => {
    let deleteID = this.state.card._id;
    // console.log(typeof deleteID); //testing

    axios.delete("https://dh-react-card.herokuapp.com/delete/" + deleteID);
  };
  render() {
    const card = this.state.card ? (
      <div className="carddetails container">
        <h5 className="center">{this.state.card.name}</h5>
        <div className="center">by: {this.state.card.issuer}</div>
        <p>
          <strong>BENEFITS:</strong> <br /> {this.state.card.benefit}
        </p>
        <a
          href="#!"
          className="waves-effect waves-light btn red"
          onClick={this.handleDelete}
        >
          <i className="material-icons left">delete</i>
          Delete
        </a>
      </div>
    ) : (
      <div className="center">Error, cannot fetch card data</div>
    );
    //after checking then return fetched data
    return <div className="container">{card}</div>;
  }
}

export default CardDetails;
