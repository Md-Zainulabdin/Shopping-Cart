"use client";
import { useCart } from "@/context/Context";
import React from "react";

const Count = () => {
  const {
    state: { cart },
  } = useCart();

  return <div>{cart.length}</div>;
};

export default Count;
