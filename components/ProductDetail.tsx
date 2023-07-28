"use client";

import { CartStore } from "@context/CartStore";
import { addToCart } from "@lib/cart";
import { Minus, Plus } from "lucide-react";
import { useContext, useState } from "react";
import { Product } from "swell-js";

const ProductDetails = ({
  product,
  selectedVariant,
}: {
  product: Product;
  selectedVariant: any;
}) => {
  const { state, dispatch } = useContext(CartStore);
  const [variant, setVariant] = useState(selectedVariant);
  const [quantity, setQuantity] = useState(1);

  function handleSelectVariant(variant: any) {
    setVariant(variant);
  }

  function addItemToCart() {
    const obj = {
      productId: product.id as string,
      variantId: variant.id,
      quantity: quantity,
    };

    dispatch({ type: "ADD_TO_CART", payload: obj });
  }

  return (
    <div className="flex flex-col gap-y-4 mt-4">
      <div className="flex flex-col gap-y-2">
        {product.sale ? (
          <div className="px-3 py-1 bg-red-500 text-white text-xs w-[100px] text-center">
            Descuento
          </div>
        ) : null}
        <h1 className="text-3xl">{product.name}</h1>
        <div className="flex items-center gap-x-2">
          <div
            className={`text-2xl font-bold ${
              product.sale ? "text-red-500" : "text-sage"
            }`}
          >
            ${variant.price?.toLocaleString()}
          </div>
          {product.sale ? (
            <div className="text-2xl text-gray-400 line-through">
              ${product.origPrice?.toLocaleString()}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-lg">Tamaños</h1>
        <div className="flex gap-x-2">
          {(product.variants as any)?.results?.map(
            (option: any, key: number) => (
              <button
                className={`${
                  variant.id === option.id
                    ? "border border-black px-4 py-1 text-sm"
                    : "border border-gray-300 text-gray-300 px-4 py-1 text-sm"
                }`}
                key={key}
                onClick={() => {
                  handleSelectVariant(option);
                }}
              >
                {option.name}
              </button>
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-lg">Cantidad</h1>
        <div className="flex items-center justify-between w-[350px] px-4 py-2 border border-black">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <Minus size={20} />
          </button>
          <div className="text-lg font-fancy font-bold select-none">
            {quantity}
          </div>
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <button
          className="p-3 bg-black text-white w-[350px] uppercase text-sm hover:bg-sage"
          onClick={() => {
            addItemToCart();
          }}
        >
          Agregar al carrito{" • "}
          <span className="font-bold">
            ${(variant.price * quantity).toLocaleString()}
          </span>
        </button>
        <button className="p-3 bg-yellow-500 text-white w-[350px] uppercase text-sm hover:bg-yellow-600">
          Compra con PayPal
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
