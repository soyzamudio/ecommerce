import ProductCard from "@components/ProductCard";
import { categorySEOText } from "@lib/constants/categories";
import { getProducts } from "@lib/products";

const ProductPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let category;
  if (searchParams?.category) {
    category = searchParams?.category as string;
  }

  const products = await getProducts({ category });

  return (
    <section className="flex flex-col gap-y-12 text-sm text-gray-500">
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-6">
          <div className="col-span-2"></div>
          <div className="col-span-4">
            <div className="flex gap-4 flex-wrap items-start justify-start">
              {products?.results.map((product: any, key: number) => (
                <ProductCard product={product} key={key} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="container mx-auto flex flex-col gap-4"
        dangerouslySetInnerHTML={{
          __html: categorySEOText[category as string] || "",
        }}
      ></div>
    </section>
  );
};

export default ProductPage;
