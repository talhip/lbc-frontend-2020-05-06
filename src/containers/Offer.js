import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";

const Offer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://leboncoin-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  return (
    <>
      {isLoading ? (
        <div className="load">En cours de chargement... </div>
      ) : (
        <div>
          <Header />
          <div className="content seller">
            <div className="seller-item">
              <div className="seller-item-photo">
                <div>
                  <img
                    className="item-photo-img"
                    alt={data.title}
                    src={data.picture.secure_url}
                  />
                </div>
                <div>{data.title}</div>
                <div>{data.price}&nbsp;€ </div>
                <div>
                  <span>
                    {data.created
                      .slice(0, 10)
                      .replace("-", "/")
                      .replace("-", "/")
                      .replace("-", "/")}
                    &nbsp;à
                  </span>
                  <span>&nbsp;{data.created.slice(11, 16)}</span>
                </div>
              </div>
              <div className="seller-item-description">
                <div>Description</div>
                <div>{data.description}</div>
              </div>
            </div>
            <div className="seller-info">
              <div>{data.creator.account.username}</div>
              <div className="seller-buy">
                <button>Acheter</button>
              </div>
            </div>
          </div>
          <h2>Current Offer</h2>
          <Link to="/">Go to Offers</Link>
        </div>
      )}
    </>
  );
};

export default Offer;
