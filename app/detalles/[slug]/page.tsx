import Breadcrumbs from "@components/Breadcrumbs";
import ProductCard from "@components/ProductCard";
import { getProductBySlug } from "@lib/products";
import { Minus, Plus } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  return {
    title: `${product.name} | ${(product.categories as any)[0].name}`,
    description: product.description,
  };
}

const DetallesPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);
  let selectedVariant = (product.variants as any).results?.[0];

  function addProductJSONLD() {
    const schema: any = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: product.images?.map((image: any) => ({
        "@type": "ImageObject",
        url: image.url,
        contentUrl: image.url,
        width: image.width,
        height: image.height,
        description: image.alt,
        representativeOfPage: "http://schema.org/True",
      })),
      description: product.description,
      sku: product.id,
      mpn: product.id,
      brand: {
        "@type": "Brand",
        name: "Ciclo Dispensary",
      },
    };

    if (product.sale) {
      schema["offers"] = {
        "@type": "Offer",
        priceCurrency: "MXN",
        price: product.salePrice,
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Organization",
          name: "Ciclo Dispensary",
        },
      };
    }

    return {
      __html: JSON.stringify(schema),
    };
  }

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={addProductJSONLD()}
        key="product-jsonld"
      />
      <div className="container mx-auto flex flex-col gap-y-12">
        <div className="grid grid-cols-2">
          <div className="col-span-1 p-12">
            <div className="relative aspect-square w-full">
              <Image
                src={(product.images as any)[0].file?.url}
                fill
                alt={product.name}
              />
            </div>
          </div>
          <div className="col-span-1 p-12 px-16">
            <div className="flex flex-col gap-y-4">
              <Breadcrumbs product={product} aria-label="breadcrumb" />
              <div className="flex flex-col gap-y-2">
                {product.sale ? (
                  <div className="px-3 py-1 bg-red-500 text-white text-xs w-[100px] text-center">
                    Descuento
                  </div>
                ) : null}
                <h1 className="text-3xl">{product.name}</h1>
                <div className="flex items-center gap-x-2">
                  <div
                    className={`text-2xl font-bold ${
                      product.sale ? "text-red-500" : "text-sage"
                    }`}
                  >
                    ${selectedVariant.price?.toLocaleString()}
                  </div>
                  {product.sale ? (
                    <div className="text-2xl text-gray-400 line-through">
                      ${product.origPrice?.toLocaleString()}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg">Tamaños</h1>
                <div className="flex gap-x-2">
                  {(product.variants as any)?.results?.map(
                    (variant: any, key: number) => (
                      <button
                        className={`${
                          selectedVariant.id === variant.id
                            ? "border border-black px-4 py-1 text-sm"
                            : "border border-gray-300 text-gray-300 px-4 py-1 text-sm"
                        }`}
                        key={key}
                      >
                        {variant.name}
                      </button>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg">Cantidad</h1>
                <div className="flex items-center justify-between w-[350px] px-4 py-2 border border-black">
                  <button>
                    <Minus size={20} />
                  </button>
                  <div className="text-lg font-fancy font-bold select-none">
                    1
                  </div>
                  <button>
                    <Plus size={20} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <button className="p-3 bg-black text-white w-[350px] uppercase text-sm hover:bg-sage">
                  Agregar al carrito
                </button>
                <button className="p-3 bg-yellow-500 text-white w-[350px] uppercase text-sm hover:bg-yellow-600">
                  Compra con PayPal
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <h1 className="text-xl">Descripción</h1>
          <p
            className="text-gray-500"
            dangerouslySetInnerHTML={
              {
                __html: product.description,
              } as any
            }
          ></p>
        </div>
        {(product.crossSells as any)?.length > 0 && (
          <div className="flex flex-col gap-y-8">
            <h1 className="text-xl">Productos Similares</h1>
            <div className="flex gap-x-4">
              {product.crossSells?.map((crossSell: any, key: number) => (
                <ProductCard productId={crossSell.productId} key={key} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetallesPage;
