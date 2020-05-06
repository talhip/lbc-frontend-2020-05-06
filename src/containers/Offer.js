import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";

const Offer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const params = useParams();
  const path = "https://leboncoin-api.herokuapp.com/offer/" + params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(path);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [path]);
  return (
    <>
      {isLoading ? (
        <div className="load">En cours de chargement... </div>
      ) : (
        <div>
          <Header />
          {data.title}
          <h2>Current Offer</h2>
          <Link to="/">Go to Offers</Link>
        </div>
      )}
    </>
  );
};

export default Offer;
