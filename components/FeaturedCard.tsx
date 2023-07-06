import Image from "next/image";
import Link from "next/link";

const FeaturedCard = ({ product }: { product: any }) => {
  return (
    <Link
      href={`/detalles/${product.slug}`}
      className="flex flex-col w-[240px] min-w-[240px]"
    >
      <div className="relative object-contain h-[300px] w-full rounded-lg aspect-auto">
        <Image
          src={product.images[0].file.url}
          fill
          className="object-cover rounded-3xl"
          alt="product_iamge"
        />
      </div>
      <div className="text-sm capitalize text-gray-400 mt-2 text-center">
        {product.tags?.length ? product.tags[0] : product.type}
      </div>
      <h2 className="font-semibold text-lg w-full text-center">
        {product.name}
      </h2>
    </Link>
  );
};

export default FeaturedCard;
