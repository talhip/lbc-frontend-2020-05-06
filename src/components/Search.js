import React from "react";
import axios from "axios";

const Search = ({ search, setSearch, setData, setIsLoading }) => {
  const title = "?title=" + search;
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://leboncoin-api.herokuapp.com/offer/with-count${title}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="field"
          placeholder="Que recherchez-vous ?"
          type="text"
          name="search"
          value={search}
          onChange={handleSearchChange}
        />
        <input className="submit-button" type="submit" value="Rechercher" />
      </form>
    </div>
  );
};

export default Search;
