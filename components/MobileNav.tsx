"use client";

import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("w-screen");
      document.body.classList.add("h-screen");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("w-screen");
      document.body.classList.remove("h-screen");
    }
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen((value) => !value);
  }

  return (
    <>
      <div className="md:hidden flex items-center justify-between container mx-auto">
        <div className="font-fancy flex text-xl items-center justify-center leading-none gap-x-4">
          <Menu size={24} onClick={toggleMenu} className="cursor-pointer" />
          <Link href="/" className="hover:text-black">
            <div>ciclo</div>
            <div>dispensary</div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-4">
          <SearchBar />
          <Link href="/carrito" className="bg-white rounded-full p-2">
            <ShoppingBag size={18} />
          </Link>
        </div>
      </div>
      <div className={`z-50 ${isOpen ? "flex" : "hidden"}`}>
        <div
          className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-40"
          onClick={toggleMenu}
        ></div>
        <div className="absolute top-0 left-0 bg-white h-screen w-4/5 shadow-xl">
          <div className="flex flex-col w-full p-4 gap-y-12">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="hover:text-black font-fancy leading-none text-xl"
              >
                <div>ciclo</div>
                <div>dispensary</div>
              </Link>
              <X
                size={24}
                onClick={toggleMenu}
                className="cursor-pointer text-gray-400"
              />
            </div>
            <div className="flex flex-col text-xl">
              <Link
                href="/productos"
                onClick={toggleMenu}
                className="hover:text-black border-b py-4 hover:bg-gray-50 px-2"
              >
                Productos
              </Link>
              <Link
                href="/dispensary-plus"
                onClick={toggleMenu}
                className="hover:text-black border-b py-4 hover:bg-gray-50 px-2 font-fancy"
              >
                Dispensary+
              </Link>
              <Link
                href="/blog"
                onClick={toggleMenu}
                className="hover:text-black border-b py-4 hover:bg-gray-50 px-2"
              >
                Blog
              </Link>
              <Link
                href="/favorites"
                onClick={toggleMenu}
                className="hover:text-black border-b py-4 hover:bg-gray-50 px-2"
              >
                Favoritos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
