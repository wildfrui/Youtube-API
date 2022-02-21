import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(term);
        }}
      >
        <input
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          type="text"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
