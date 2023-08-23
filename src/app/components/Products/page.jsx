"use client";
import { useCart } from "@/context/Context";
import Image from "next/image";
import { useEffect, useState } from "react";

const Products = () => {
  const {
    prodState: { searchQuery },
    state: { products, cart },
    dispatch,
    filter,
  } = useCart();
  const [product, setProduct] = useState(products);

  useEffect(() => {
    const updateBySearch = products.filter((prod) => {
      if (prod.Title.toLowerCase().includes(searchQuery)) {
        return prod;
      }
    });

    setProduct(updateBySearch);
  }, [searchQuery]);

  useEffect(() => {
    const updateData = products.filter((item) => item.Cat === filter);

    if (updateData === null || filter === "All") {
      setProduct(products);
      return;
    }

    setProduct(updateData);
  }, [filter]);

  return (
    <div className="w-full flex flex-wrap gap-6 justify-center">
      {product.map((prod) => (
        <div
          key={prod.id}
          className="w-[350px] border rounded cursor-pointer overflow-hidden"
        >
          <div className="imgBox flex items-center justify-center border-b">
            <Image
              src={prod.Img}
              width={300}
              height={300}
              priority
              alt={prod.Title}
            />
          </div>

          <div className="product-title w-full h-full p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-medium">{prod.Cat}</h1>
              <span className="text-green-500">{prod.Price} $</span>
            </div>

            <div className="w-full mt-4">
              <h1 className="text-sm text-[#666]">{prod.Title}</h1>
            </div>

            <div className="button w-full mt-3">
              {cart.some((p) => p.id === prod.id) ? (
                <button
                  className="w-full border py-2 bg-red-500 text-white font-medium"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    });
                  }}
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  className="w-full border py-2 bg-blue-400 text-white font-medium"
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    });
                  }}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
