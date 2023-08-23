"use client";
import { useCart } from "@/context/Context";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const CartPage = () => {
  const {
    state: { cart },
    dispatch,
  } = useCart();

  let price = 0

 if (cart.length !== 0) {
    cart.forEach(item => {
      price += Number(item.Price * item.qty)
    })
 }

 console.log(price);


  return (
    <div className="Cart w-full px-[30px] md:px-[60px]">
      <div className="title py-8 flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-[#333]">
          Your Shopping Cart
        </h1>
        <p className="text-[#666]">
          you have total {cart.length} items in cart
        </p>
      </div>

      <div className="cartProducts mt-4 w-full h-[450px] border overflow-y-scroll">
        {cart.length !== 0 ? (
          cart.map((prod) => (
            <div className="w-full h-[150px] flex items-center justify-between border overflow-hidden" key={prod.Id}>
              <div className="imgBox w-[200px] flex items-center justify-center">
                <Image
                  src={prod.Img}
                  width={170}
                  height={150}
                  priority
                  alt={prod.Title}
                  className="object-cover"
                />
              </div>

              <div className="product-category">
                <h2 className="text-xl font-medium text-[#333]">{prod.Cat}</h2>
              </div>

              <div className="product-price">
                <span className="text-lg text-blue-500 font-medium">
                  {prod.Price} $
                </span>
              </div>

              <div
                className="product-delete px-6 cursor-pointer"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}
              >
                <AiFillDelete className="text-xl text-red-500" />
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-xl md:text-2xl text-black">
              You dont have any item in cart
            </h1>
          </div>
        )}
      </div>

      <div className="total-amount w-full py-6 text-right">
          <h1 className="text-xl font-medium mb-6">Total Amount : {price} $</h1>
          <Link href='/' className=" border-2 rounded-md border-blue-400 px-5 py-3">back to shopping</Link>
      </div>
    </div>
  );
};

export default CartPage;
