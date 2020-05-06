import React from "react";

const Search = ({ search, setSearch }) => {
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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
