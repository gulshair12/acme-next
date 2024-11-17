import React from "react";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = async ({ query }: { query?: string }) => {
  return (
    <>
      <form action="/" className="search-form">
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search........"
          className="search-input"
        />
        <div className="flex gap-3">
          {query && <SearchFormReset />}
          <button className="search-btn  text-white" type="submit">
            <Search  />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
