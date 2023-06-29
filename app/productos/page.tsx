"use client";

import ProductCard from "@components/ProductCard";
import client from "@lib/client";

const LIMIT = 20;

const getAllProducts = async (limit: number, page: number) => {
  const res = await client.getAllProducts({
    limit,
    page,
  });
  return res.data.products;
};

const ProductPage = async () => {
  const page = 1;
  const data = await getAllProducts(LIMIT, page);
  return (
    <section className="container">
      <div className="flex gap-2 flex-wrap items-start justify-start">
        {data?.results?.map((product, key) => (
          <ProductCard product={product} key={key} />
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
