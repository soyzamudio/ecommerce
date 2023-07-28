"use client";

import { CartStore } from "@context/CartStore";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";
import swell from "swell-js";

const CartItem = ({ item }: { item: swell.CartItem }) => {
  const { dispatch } = useContext(CartStore);
  const [quantity, setQuantity] = useState(item.quantity);

  async function updateQuantity(variantId: string, quantity: number) {
    setQuantity(quantity);
    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        variantId,
        quantity,
      },
    });
  }

  async function removeItem(variantId: string) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: {
        variantId,
      },
    });
  }

  return (
    <div className={`grid grid-cols-5 p-4 border-b`}>
      <div className="flex col-span-3 items-center gap-x-6">
        <div className="relative object-contain h-28 w-28 aspect-square">
          <Image
            src={(item.product?.images as any)[0].file.url as string}
            fill
            className="object-contain"
            alt={item.product?.name as string}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <div>{item.product?.name}</div>
          <div className="text-sm text-gray-500">{item.variant?.name}</div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-y-2 items-center justify-center">
        <div className="flex items-center justify-between w-28 px-4 py-2 border border-black">
          <button
            className="disabled:text-gray-400"
            disabled={quantity === 1}
            onClick={() => {
              updateQuantity(item.id as string, (quantity as number) - 1);
            }}
          >
            <Minus size={18} />
          </button>
          <div className="text-sm font-fancy font-bold select-none">
            {quantity}
          </div>
          <button
            onClick={() => {
              updateQuantity(item.id as string, (quantity as number) + 1);
            }}
          >
            <Plus size={18} />
          </button>
        </div>
        <button
          className="underline text-xs uppercase"
          onClick={() => {
            removeItem(item.id as string);
          }}
        >
          Eliminar
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-center text-center text-sm text-gray-600">
        ${((item.price as number) * (item.quantity as number)).toLocaleString()}
      </div>
    </div>
  );
};

export default CartItem;
