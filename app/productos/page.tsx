import ProductCard from "@components/ProductCard";
import {
  categorySEOText,
  categoryShortDescription,
  categoryTitle,
  categoryTree,
} from "@lib/constants/categories";
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
    <>
      <section className="relative pattern--green">
        <div className="container mx-auto flex items-center justify-center py-10 text-white flex-col gap-y-4 relative z-10">
          <h1>
            {categoryTitle[category as keyof typeof categorySEOText] ||
              "Productos"}
          </h1>
          <p
            className="text-center text-sm text-gray-200"
            dangerouslySetInnerHTML={{
              __html:
                categoryShortDescription[
                  (category || "default") as keyof typeof categorySEOText
                ],
            }}
          ></p>
        </div>
        <div className="gradient absolute bottom-0 bg-gradient-to-bl from-sage via-transparent to-sage h-full w-full z-0"></div>
        <div className="gradient absolute bottom-0 bg-gradient-to-br from-transparent via-sage to-transparent opacity-90 h-full w-full z-0"></div>
      </section>
      <section className="flex flex-col gap-y-12 text-sm text-gray-500">
        <div className="container py-6 md:py-12 mx-auto">
          <div className="grid grid-cols-5">
            <div className="hidden col-span-1 md:flex flex-col gap-y-6 pr-20">
              {categoryTree.map((category, key) => (
                <div key={key} className="border-b border-gray-400 pb-4">
                  <h3 className="font-bold text-lg mb-2 text-gray-700">
                    {category.header}
                  </h3>
                  <ul className="flex flex-col gap-y-2">
                    {category.items.map((subcategory, subKey) => (
                      <li key={subKey}>
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
              <div className="grid grid-cols-2 md:flex gap-4 flex-wrap">
                {products?.results.map((product: any, key: number) => (
                  <div className="col-span-1 flex">
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
    </>
  );
};

export default ProductPage;
