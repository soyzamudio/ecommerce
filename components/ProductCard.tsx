"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { sortVariants } from "@lib/utils";

const ProductCard = ({ product }: { product: any }) => {
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  return (
    <div className="bg-white border border-gray-100 shadow-sm hover:border-gray-200 w-[180px] md:w-[244px] p-3 flex flex-col justify-start rounded-md gap-3">
      <div className="relative object-contain w-full aspect-[3/4] items-start group">
        <Link href={`/detalles/${product.id}`}>
          <Image
            src={product.images[0].file.url}
            fill
            className="object-cover rounded-lg z-10"
            alt="product_image"
          />
        </Link>
        <div className="absolute bottom-2 ml-[5%] w-[90%] px-3 py-2 flex justify-between z-40 text-sm bg-gray-200 bg-opacity-30 hover:bg-opacity-80 hover:-translate-y-1 backdrop-blur-md rounded-lg invisible group-hover:visible cursor-pointer items-center font-semibold transition-[backgroundColor,_transform] ease-in-out duration-500 hover:shadow-lg">
          <div>Agregar</div>
          <ShoppingCart size={16} strokeWidth={2} />
        </div>
        <div className="absolute right-2 top-2 z-40 bg-white bg-opacity-30 hover:bg-opacity-50 backdrop-blur-lg p-1.5 rounded-lg transition-backgroundColor ease-in-out duration-500 hover:shadow-lg cursor-pointer">
          <Heart size={14} />
        </div>
      </div>
      <div className="flex justify-between gap-x-2 items-center text-sm font-bold">
        <h1 className="truncate text-base font-sans pt-[1px]">
          {product.name}
        </h1>
        <div className="flex flex-col font-bold text-right items-center">
          {product.sale ? (
            <div className="text-red-400">
              $
              {selectedVariant
                ? selectedVariant.price.toLocaleString()
                : product.price.toLocaleString()}
            </div>
          ) : null}
          <div
            className={`${
              product?.sale ? "text-xs text-gray-300 line-through" : ""
            }`}
          >
            $
            {selectedVariant
              ? product.sale
                ? selectedVariant?.origPrice.toLocaleString()
                : selectedVariant?.price.toLocaleString()
              : null}
            {!selectedVariant
              ? product.sale
                ? product.origPrice.toLocaleString()
                : product.price.toLocaleString()
              : null}
          </div>
        </div>
      </div>
      {product.variants.results ? (
        <div className="flex gap-x-2 w-full overflow-x-auto">
          {product.variants.results
            .sort(sortVariants)
            .map((variant: any, key: number) => (
              <div
                key={key}
                className={`border text-gray-400 px-2 py-1 text-xs  cursor-pointer transition-colors duration-300 ease-in-out rounded ${
                  selectedVariant?.id === variant.id
                    ? "border-gray-900 text-gray-900"
                    : "border-gray-200 hover:border-gray-900 hover:text-gray-900"
                }`}
                onClick={() => setSelectedVariant(variant)}
              >
                {variant.name}
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProductCard;