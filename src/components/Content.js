import React from "react";
import { Link } from "react-router-dom";

const Content = ({ data }) => {
  const offers = data.offers;
  return (
    <div className="content">
      {offers.map((offer) => {
        const path = "/offer/" + offer._id;
        return (
          <Link className="content-item" to={path} key={offer._id}>
            <div className="offer">
              <div className="photo-list">
                <img alt={offer.title} src={offer.picture.secure_url} />
              </div>
              <div className="info-list">
                <div>
                  <div>{offer.title}</div>
                  <div>{offer.price}&nbsp;€</div>
                </div>
                <div>
                  <div>{offer.created}</div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Content;
