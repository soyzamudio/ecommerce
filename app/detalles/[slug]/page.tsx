import Breadcrumbs from "@components/Breadcrumbs";
import ProductCard from "@components/ProductCard";
import ProductDetails from "@components/ProductDetail";
import ProductImages from "@components/ProductImages";
import { NEXT_URL } from "@lib/constants/global";
import { getProductBySlug } from "@lib/products";
import { Metadata } from "next";
import Script from "next/script";
import { Image as iImage } from "swell-js";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  return {
    metadataBase: new URL(`${NEXT_URL}/detalles/${params.slug}`),
    title: `${product.name} | ${(product.categories as any)[0].name}`,
    description: product.description,
    openGraph: {
      type: "website",
      locale: "es_MX",
      url: `${NEXT_URL}/detalles/${params.slug}`,
      siteName: "Ciclo Dispensary",
      title: `Ciclo Dispensary | ${product.name} | ${
        (product.categories as any)[0].name
      }`,
      description: product.description,
      images: [
        {
          url: (product.images as any)[0].file.url,
          width: 1200,
          height: 630,
          alt: `Ciclo Dispensary | ${product.name} | ${
            (product.categories as any)[0].name
          }`,
        },
      ],
    },
  };
}

const DetallesPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);
  const selectedVariant = (product.variants as any).results?.[0];

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
            <ProductImages images={product.images as iImage[]} />
          </div>
          <div className="col-span-1 p-12 px-16">
            <Breadcrumbs product={product} aria-label="breadcrumb" />
            <ProductDetails
              product={product}
              selectedVariant={selectedVariant}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-8">
          <h1 className="text-xl">Descripción</h1>
          <p
            className="prose prose-stone max-w-none"
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
