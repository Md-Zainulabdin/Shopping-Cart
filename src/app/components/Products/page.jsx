"use client";
import { useCart } from "@/context/Context";
import Image from "next/image";

const Products = () => {
  const {
    state: { products },
  } = useCart();
  console.log(products);

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center">
      {products.map((prod) => (
        <div key={prod.id} className="w-[350px] border rounded cursor-pointer overflow-hidden">
          <div className="imgBox border-b">
            <Image
              src={prod.Img}
              width={300}
              height={300}
              priority
              alt={prod.Title}
            />
          </div>

          <div className="product-title w-full p-4">

            <div className="flex justify-between items-center">
              <h1 className="text-lg font-medium">{prod.Cat}</h1>
              <span className="text-green-500">{prod.Price} $</span>
            </div>

            <div className="w-full mt-4">
                <h1 className="text-sm text-[#666]">{prod.Title}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
