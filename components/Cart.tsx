"use client";

import { CartStore } from "@context/CartStore";
import Link from "next/link";
import { useContext } from "react";
import CartItem from "./CartItem";

const FREE_SHIPPING_THRESHOLD = 500;

const Cart = async () => {
  const {
    state: { cart },
  } = useContext(CartStore);

  function getFreeShippingDifference(subtotal: number) {
    return FREE_SHIPPING_THRESHOLD - subtotal;
  }

  if (!(cart?.items as any)?.length) {
    return (
      <section className="flex h-full items-center justify-center flex-col">
        <div className="flex flex-col gap-y-4 items-center p-4 py-12">
          <h1>Carrito vacio</h1>
          <p className="text-gray-400">
            ¡Agrega $500 más y recibe envio gratis!
          </p>
          <Link
            href="/productos"
            className="text-sm text-white uppercase bg-sage px-8 py-2 tracking-widest hover:text-white"
          >
            Explorar productos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-y-2 items-center p-4 py-12">
        <h1>Carrito</h1>
        {getFreeShippingDifference(cart?.subTotal as number) < 1 ? (
          <p className="text-gray-400">¡Tienes envio gratis!</p>
        ) : (
          <p className="text-gray-400">
            ¡Te faltan $
            {getFreeShippingDifference(
              cart?.subTotal as number
            ).toLocaleString()}{" "}
            para envio gratis!
          </p>
        )}
      </div>
      <div className="grid grid-cols-5 text-xs border-b p-4 text-gray-500 uppercase">
        <div className="col-span-3">Productos ({cart?.itemQuantity})</div>
        <div className="col-span-1 text-center">Cantidad</div>
        <div className="col-span-1 text-center">Total</div>
      </div>
      {cart?.items?.map((item: any, key: number) => (
        <CartItem item={item} key={key} />
      ))}
      <div className="flex flex-col gap-y-2 items-end justify-end p-4">
        <div className="text-sm uppercase text-black">
          Subtotal:{" "}
          <span className="font-semibold">
            ${cart?.subTotal?.toLocaleString()}
          </span>
        </div>
        <p className="text-gray-400">Envio se calcula en el checkout</p>
        <Link
          href="/checkout"
          className="text-sm text-white uppercase bg-sage px-8 py-2 tracking-widest hover:text-white"
        >
          Terminar compra
        </Link>
      </div>
    </section>
  );
};

export default Cart;
