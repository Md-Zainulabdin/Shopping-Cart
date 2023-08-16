"use client";
import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full border my-[40px] rounded-lg overflow-hidden">
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Product"
        className="w-full p-3  outline-none  text-[#888]"
      />
    </div>
  );
};

export default Search;
