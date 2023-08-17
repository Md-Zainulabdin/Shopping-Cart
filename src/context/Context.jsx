"use client";
import { productList } from "@/data/product";
import { createContext, useContext, useReducer, reducer, useState } from "react";
import { cartReducer } from "./reducer";

export const Cart = createContext();
export const useCart = () => useContext(Cart);

export const ContextProvider = ({ children }) => {
  const [filter, setFilter] = useState('All')
  const [state, dispatch] = useReducer(cartReducer, {
    products: productList,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch, filter, setFilter }}>{children}</Cart.Provider>;
};
