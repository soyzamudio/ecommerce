import Breadcrumbs from "@components/Breadcrumbs";
import { getProductBySlug } from "@lib/products";
import { Metadata } from "next";
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
      <div className="container mx-auto">
        <Breadcrumbs product={product} aria-label="breadcrumb" />
      </div>
    </>
  );
};

export default DetallesPage;
