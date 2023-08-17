"use client";
import { productList } from "@/data/product";
import {
  createContext,
  useContext,
  useReducer,
  useState,
  reducer,
} from "react";
import { cartReducer, productReducer } from "./reducer";

export const Cart = createContext();
export const useCart = () => useContext(Cart);

export const ContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("All");
  const [state, dispatch] = useReducer(cartReducer, {
    products: productList,
    cart: [],
  });

  const [prodState, prodDispatch] = useReducer(productReducer, {
    searchQuery: "",
  });

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        filter,
        setFilter,
        prodState,
        prodDispatch,
      }}
    >
      {children}
    </Cart.Provider>
  );
};
