import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Content from "../components/Content";

const Offers = ({ refresh }) => {
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
  }, [refresh]);
  return (
    <>
      {isLoading ? null : (
        <div>
          <Search
            search={search}
            setSearch={setSearch}
            setData={setData}
            setIsLoading={setIsLoading}
          />
          <Content data={data} />
        </div>
      )}
    </>
  );
};

export default Offers;
