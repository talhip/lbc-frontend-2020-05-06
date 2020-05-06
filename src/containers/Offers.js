import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import Content from "../components/Content";
import { Link } from "react-router-dom";

const Offers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://leboncoin-api.herokuapp.com/offer/with-count"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="load">En cours de chargement... </div>
      ) : (
        <div>
          <Header />
          <Search search={search} setSearch={setSearch} />
          <Content data={data} />
          <h2>All Offers</h2>
          <Link to="/offer/:id">Go to Offer</Link>
        </div>
      )}
    </>
  );
};

export default Offers;
