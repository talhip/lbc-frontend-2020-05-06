import React from "react";
import { Link } from "react-router-dom";

const Content = ({ data }) => {
  const offers = data.offers;
  return (
    <div className="content">
      {offers.map((offer) => {
        const path = "/offer/" + offer._id;
        return (
          <Link to={path} key={offer._id}>
            <div className="offer">{offer.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Content;
