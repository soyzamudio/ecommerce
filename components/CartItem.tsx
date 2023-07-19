"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import swell from "swell-js";

const CartItem = ({ item }: { item: swell.CartItem }) => {
  const [cartItem, setCartItem] = useState<swell.CartItem>(item);
  const [deleted, setDeleted] = useState<boolean>(false);

  async function updateQuantity(variantId: string, quantity: number) {
    setCartItem({ ...cartItem, quantity: quantity });
    await swell.cart.updateItem(variantId, {
      quantity: quantity,
    });
  }

  async function removeItem(variantId: string) {
    await swell.cart.removeItem(variantId);
    setDeleted(true);
  }

  return (
    <div className={`grid grid-cols-5 p-4 border-b ${deleted ? "hidden" : ""}`}>
      <div className="flex col-span-3 items-center gap-x-6">
        <div className="relative object-contain h-28 w-28 aspect-square">
          <Image
            src={(cartItem.product?.images as any)[0].file.url as string}
            fill
            className="object-contain"
            alt={cartItem.product?.name as string}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <div>{cartItem.product?.name}</div>
          <div className="text-sm text-gray-500">{cartItem.variant?.name}</div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-y-2 items-center justify-center">
        <div className="flex items-center justify-between w-28 px-4 py-2 border border-black">
          <button
            className="disabled:text-gray-400"
            disabled={cartItem.quantity === 1}
            onClick={() => {
              updateQuantity(
                cartItem.id as string,
                (cartItem.quantity as number) - 1
              );
            }}
          >
            <Minus size={18} />
          </button>
          <div className="text-sm font-fancy font-bold select-none">
            {cartItem.quantity}
          </div>
          <button
            onClick={() => {
              updateQuantity(
                cartItem.id as string,
                (cartItem.quantity as number) + 1
              );
            }}
          >
            <Plus size={18} />
          </button>
        </div>
        <button
          className="underline text-xs uppercase"
          onClick={() => {
            removeItem(cartItem.id as string);
          }}
        >
          Eliminar
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-center text-center text-sm text-gray-600">
        $
        {(
          (cartItem.price as number) * (cartItem.quantity as number)
        ).toLocaleString()}
      </div>
    </div>
  );
};

export default CartItem;
