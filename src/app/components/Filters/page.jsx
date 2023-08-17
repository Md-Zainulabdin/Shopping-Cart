"use client";
import { useCart } from "@/context/Context";
import React from "react";

const Filters = () => {
  const { setFilter } = useCart();

  return (
    <div className="filters mb-6">
      <div className="filter-category flex flex-wrap items-center justify-around">
        <div
          className="border px-6 py-2 cursor-pointer text-[#222] rounded-full"
          onClick={() => setFilter("All")}
        >
          All
        </div>
        <div
          className="border px-6 py-2 cursor-pointer text-[#222] rounded-full"
          onClick={() => setFilter("Tablet")}
        >
          Tablet
        </div>
        <div
          className="border px-6 py-2 cursor-pointer text-[#222] rounded-full"
          onClick={() => setFilter("Headphone")}
        >
          Headphone
        </div>
        <div
          className="border px-6 py-2 cursor-pointer text-[#222] rounded-full"
          onClick={() => setFilter("Smart Watch")}
        >
          Smart Watch
        </div>
        <div
          className="border px-6 py-2 cursor-pointer text-[#222] rounded-full"
          onClick={() => setFilter("Camera")}
        >
          Camera
        </div>
        <div
          className="border px-6 py-2 cursor-pointer text-[#222] rounded-full"
          onClick={() => setFilter("Powerbank")}
        >
          Powerbank
        </div>
      </div>
    </div>
  );
};

export default Filters;
