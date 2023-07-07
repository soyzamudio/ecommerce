import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import { MENU_PRODUCTS_ITEMS } from "@lib/constants/menu";

const Nav = () => {
  return (
    <header className="py-4">
      <div className="md:hidden flex items-center justify-between container mx-auto">
        <div className="font-fancy flex text-xl items-center justify-center leading-none gap-x-4">
          <Menu size={24} />
          <Link href="/" className="hover:text-black">
            <div>ciclo</div>
            <div>dispensary</div>
          </Link>
        </div>
        <div className="flex flex-1 items-end justify-end gap-x-4">
          <Link href="/" className="bg-white rounded-full p-2">
            <Search size={18} />
          </Link>
          <Link href="/carrito" className="bg-white rounded-full p-2">
            <ShoppingBag size={18} />
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between container mx-auto">
        <div className="flex flex-1 gap-x-8">
          <div className="relative group">
            <Link href="/productos" className="flex items-center">
              <div>Productos</div>
              <ChevronDown height={14} />
            </Link>
            <MegaMenu columns={MENU_PRODUCTS_ITEMS.columns} />
          </div>
          <Link href="/dispensary-plus" className="font-fancy">
            Dispensary+
          </Link>
          <Link href="/">Blog</Link>
          <Link href="/">Nosotros</Link>
        </div>
        <div className="font-fancy flex flex-col flex-[.5] text-2xl items-center justify-center leading-none">
          <Link href="/" className="hover:text-black">
            <div>ciclo</div>
            <div>dispensary</div>
          </Link>
        </div>
        <div className="flex flex-1 items-end justify-end gap-x-4">
          <Link href="/" className="bg-white rounded-full p-2">
            <Search size={18} />
          </Link>
          <Link
            href="/"
            className="bg-white rounded-full p-2 hover:text-red-500"
          >
            <Heart size={18} />
          </Link>
          <Link href="/" className="bg-white rounded-full p-2">
            <User size={18} />
          </Link>
          <Link href="/carrito" className="bg-white rounded-full p-2">
            <ShoppingBag size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
