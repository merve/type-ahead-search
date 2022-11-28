import React, { useState } from "react";
import IconSearch from "../Icons/IconSearch";
import IconAt from "../Icons/IconAt";
import IconDocument from "../Icons/iconDocument";
import IconPhone from "../Icons/IconPhone";
import { DummyData } from "../../api/data";

export const Search = () => {
  const [searchParam, setSearchParam] = useState("");
  const filterBy = ["name", "number"];

  const handleSearchInput = (e) => {
    setSearchParam(e.target.value.toLowerCase().trim());
  };
  const handleFilter = (data) => {
    const result = data.filter((item) =>
      filterBy.some((key) =>
        item[key].toString().toLowerCase().trim().includes(searchParam)
      )
    );
    return result.length > 1 ? result : false;
  };
  return (
    <div className="search__container" role="search">
      <div className="search__input">
        <IconSearch width="16" height="16" />
        <input
          placeholder="SEARCH (Client Name / Policy Number)"
          onChange={(e) => handleSearchInput(e)}
        />
      </div>
      {searchParam && (
        <ul className="search-result">
          {handleFilter(DummyData) ? (
            handleFilter(DummyData).map((item) => (
              <li className="search-result__item" key={item.id}>
                <div className="search-result__name">{item.name}</div>
                <div className="search-result__info">
                  <div className="search-result__phone">
                    <IconPhone width="16" height="16" />
                    {item.phone}
                  </div>
                  <div className="search-result__email">
                    <IconAt width="16" height="16" />
                    {item.email}
                  </div>
                  <div className="search-result__number">
                    <IconDocument width="16" height="16" /> Policy no.{" "}
                    {item.number} | {item.number}
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="search-result__null">No result</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
