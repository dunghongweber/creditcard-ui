import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ cardsList }) => {
  const cardList = cardsList.map((c) => {
    return (
      <div className="myCard row" key={c._id}>
        <div className="col m4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img src={c.picture} alt="card-pic" className="activator" />
            </div>

            {/* Reveal card detail */}
            <div className="card-reveal">
              <span className="card-title blue-text text-lighten-2">
                {c.name.toUpperCase()}
                <i className="material-icons right">close</i>
              </span>
              <p>{c.benefit.toUpperCase()}</p>
              <Link
                to={"/" + c._id}
                className="waves-effect waves-light btn blue"
              >
                <i className="material-icons right">credit_card</i>
                Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
  if (cardList) {
    return <div className="cardList">{cardList}</div>;
  } else {
    return (
      <div className="center">
        <p>Loading....</p>
      </div>
    );
  }
};

export default Cards;
