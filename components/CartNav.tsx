"use client";

import { CartStore } from "@context/CartStore";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useContext, useEffect } from "react";

const CartNav = () => {
  const { state, dispatch } = useContext(CartStore);

  useEffect(() => {
    dispatch({ type: "LOAD_CART" });
  }, []);

  return (
    <Link
      href="/carrito"
      className="relative bg-white rounded-full p-2 shadow-sm"
    >
      <ShoppingBag size={18} />
      {state.cart?.items?.length ? (
        <div className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full flex h-[15px] min-w-[15px] px-1 items-center justify-center">
          {state.cart?.itemQuantity}
        </div>
      ) : null}
    </Link>
  );
};

export default CartNav;
