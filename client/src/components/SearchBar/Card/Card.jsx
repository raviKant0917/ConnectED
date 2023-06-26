import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = (props) => {
  return (
    <div className="cart-card-wrapper">
      <Link to={`/${props.id}`} className="cart-card">
        <img src={props.image} alt={props.owner} />
        <h1>{props.product}</h1>
        <div>Owner: &nbsp;{props.owner}</div>
        {props.rent == true && <h5>{`${props.days} days left`}</h5>}
      </Link>
    </div>
  );
};

export default Card;
