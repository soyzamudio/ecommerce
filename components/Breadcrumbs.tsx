import { NEXT_URL } from "@lib/constants/global";
import Link from "next/link";
import Script from "next/script";
import { Product } from "swell-js";

const Breadcrumbs = ({ product }: { product: Product }) => {
  function addBreadcrumbsJsonLd() {
    const itemList = [];

    product.categories?.forEach((category: any, index: number) => {
      itemList.push({
        "@type": "ListItem",
        position: index + 2,
        name: category.name,
        item: `${NEXT_URL}/productos/${category.slug}`,
      });
    });

    itemList.unshift({
      "@type": "ListItem",
      position: 1,
      name: "Productos",
      item: `${NEXT_URL}/productos`,
    });

    itemList.push({
      "@type": "ListItem",
      position: itemList.length + 1,
      name: product.name,
      item: `${NEXT_URL}/detalles/${product.slug}`,
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: itemList,
    };

    return {
      __html: JSON.stringify(schema),
    };
  }

  return (
    <div className="flex gap-x-1 text-sm">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
        key="product-jsonld"
      />
      <div className="text-gray-400">
        <Link className="text-gray-400" href="/productos">
          Productos
        </Link>{" "}
        /
      </div>
      {product.categories?.map((category: any, key: number) => (
        <div key={key} className="text-gray-400">
          <Link
            className="text-gray-400"
            href={`/productos?category=${category.slug}`}
          >
            {category.name}
          </Link>{" "}
          /
        </div>
      ))}
      <Link className="text-gray-700" href={`/detalles/${product.slug}`}>
        {product.name}
      </Link>
    </div>
  );
};

export default Breadcrumbs;
