import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <div>
      <input type="text" value={search} onChange={handleOnChange} />
    </div>
  );
}

export default Search;
