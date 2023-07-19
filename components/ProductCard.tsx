import { getProductBySlug } from "@lib/products";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FavoriteProduct from "./FavoriteProduct";

const ProductCard = async ({
  product,
  productId,
}: {
  product?: any;
  productId?: string;
}) => {
  if (productId && !product) {
    product = await getProductBySlug(productId);
  }

  if (product.id) {
    productId = product.id;
  }

  return (
    <div className="relative bg-white border border-gray-100 shadow-sm hover:border-gray-200 w-[220px] md:w-[200px] p-3 flex flex-col justify-start rounded-md gap-3 overflow-hidden">
      {product.sale ? (
        <div className="absolute transform -rotate-45 top-5 -left-7 z-30 px-8 py-1 bg-red-500 text-white text-xs shadow select-none">
          Descuento
        </div>
      ) : null}
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
          className="absolute bottom-2 ml-[5%] w-[90%] px-3 py-2 flex justify-between z-40 text-xs bg-gray-200 bg-opacity-30 hover:bg-opacity-80 hover:-translate-y-1 backdrop-blur-md rounded-lg invisible group-hover:visible items-center font-semibold transition-[backgroundColor,_transform] ease-in-out duration-500 hover:shadow-lg"
        >
          <div>Vista Rapida</div>
          <Eye size={16} strokeWidth={2} />
        </Link>
        <FavoriteProduct productId={productId as string} />
      </div>
      <Link
        href={`/detalles/${product.slug}`}
        className="flex flex-col gap-y-1 text-sm font-bold text-gray-700 flex-1 justify-between"
      >
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
      </Link>
    </div>
  );
};

export default ProductCard;
