"use client";
import { getProductBySlug } from "@lib/products";

const DetallesPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);
  console.log("PRODUCT", product);
  return <div>{product.name}</div>;
};

export default DetallesPage;
