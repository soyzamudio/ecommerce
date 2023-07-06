import Image from "next/image";

const FeaturedCard = ({ product }: { product: any }) => {
  return (
    <div className="flex flex-col w-[240px] min-w-[240px]">
      <div className="relative object-contain h-[300px] w-full rounded-lg aspect-auto">
        <Image
          src={product.images[0].file.url}
          fill
          className="object-cover rounded-3xl"
          alt="product_iamge"
        />
      </div>
      <div className="text-sm">
        {product.tags?.length ? product.tags[0] : product.type}
      </div>
      <h2 className="font-semibold text-lg w-full">{product.name}</h2>
    </div>
  );
};

export default FeaturedCard;
