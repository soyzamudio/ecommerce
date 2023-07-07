import ProductCard from "@components/ProductCard";
import { categorySEOText, categoryTree } from "@lib/constants/categories";
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
      <div className="container py-6 md:py-12 mx-auto">
        <div className="grid grid-cols-5">
          <div className="hidden col-span-1 md:flex flex-col gap-y-4">
            {categoryTree.map((category, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-2 text-gray-700">
                  {category.header}
                </h3>
                <ul className="flex flex-col gap-y-2">
                  {category.items.map((subcategory, index) => (
                    <li key={index}>
                      <a
                        href={`/productos?category=${subcategory.value}`}
                        className="hover:text-gray-700"
                      >
                        {subcategory.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-span-5 md:col-span-4">
            <div className="grid grid-cols-2 md:flex gap-4 flex-wrap items-start justify-start">
              {products?.results.map((product: any, key: number) => (
                <div className="col-span-1">
                  <ProductCard product={product} key={key} />
                </div>
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
