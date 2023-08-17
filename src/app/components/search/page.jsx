"use client";
import { useCart } from "@/context/Context";
import React, { useState } from "react";

const Search = () => {
  const {
     prodState : {searchQuery} ,
     prodDispatch,
  } = useCart();


  return (
    <div className="w-full border my-[40px] rounded-lg overflow-hidden">
      <input
        type="search"
        name="search"
        id="search"
        onChange={(e) =>
          prodDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          })
        }
        placeholder="Search Product"
        className="w-full p-3  outline-none  text-[#888]"
      />
    </div>
  );
};

export default Search;
