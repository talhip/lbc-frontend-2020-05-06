import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
const formatDate = (date) => {
  return moment(date).format("DD/MM/YYYY à HH:mm");
};

const Offer = ({ user }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  const handleBuy = () => {
    if (user) {
      history.push("/payment", {
        title: data.title,
        price: data.price,
        picture: data.picture.secure_url,
      });
    } else {
      history.push("/log_in");
    }
  };

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
      {isLoading ? null : (
        <div>
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
                  <span>{formatDate(data.created)}</span>
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
                <button onClick={handleBuy}>Acheter</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offer;
