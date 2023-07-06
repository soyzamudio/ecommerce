import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white border border-gray-100 shadow-sm hover:border-gray-200 w-[180px] md:w-[200px] p-3 flex flex-col justify-start rounded-md gap-3">
      <div className="relative object-contain w-full aspect-[3/4] items-start group">
        <Link href={`/detalles/${product.slug}`}>
          <Image
            src={product.images[0].file.url}
            sizes={
              "(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 244px"
            }
            fill
            className="object-cover rounded-lg z-10"
            alt="product_image"
          />
        </Link>
        <Link
          href={`/detalles/${product.slug}`}
          className="absolute bottom-2 ml-[5%] w-[90%] px-3 py-2 flex justify-between z-40 text-sm bg-gray-200 bg-opacity-30 hover:bg-opacity-80 hover:-translate-y-1 backdrop-blur-md rounded-lg invisible group-hover:visible items-center font-semibold transition-[backgroundColor,_transform] ease-in-out duration-500 hover:shadow-lg"
        >
          <div>Agregar</div>
          <ShoppingCart size={16} strokeWidth={2} />
        </Link>
        <div className="absolute right-2 top-2 z-40 bg-white bg-opacity-30 hover:bg-opacity-50 backdrop-blur-lg p-1.5 rounded-lg transition-backgroundColor ease-in-out duration-500 hover:shadow-lg cursor-pointer">
          <Heart size={14} />
        </div>
      </div>
      <div className="flex flex-col gap-y-1 text-sm font-bold text-gray-700">
        <h1 className="text-sm font-sans">{product.name}</h1>
        <div className="flex font-semibold items-center gap-x-2">
          {product.sale ? (
            <div className="text-red-400">
              ${product.price?.toLocaleString()}
            </div>
          ) : null}
          <div
            className={`${
              product?.sale ? "text-xs text-gray-300 line-through" : ""
            }`}
          >
            $
            {product.sale
              ? product.origPrice?.toLocaleString()
              : product.price?.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
