import React from "react";
import { Link } from "react-router-dom";

const Content = ({ data }) => {
  const offers = data.offers;
  return (
    <div className="content">
      {offers.map((offer) => {
        return (
          <Link
            className="content-item"
            to={`/offer/${offer._id}`}
            key={offer._id}
          >
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
                  <span>
                    {offer.created
                      .slice(0, 10)
                      .replace("-", "/")
                      .replace("-", "/")
                      .replace("-", "/")}
                    &nbsp;à
                  </span>
                  <span>&nbsp;{offer.created.slice(11, 16)}</span>
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
