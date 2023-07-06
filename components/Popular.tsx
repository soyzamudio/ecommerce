"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import FeaturedCard from "./FeaturedCard";
import { getProducts } from "@lib/products";
import { Product } from "swell-js";

const Popular = () => {
  const [popular, setPopular] = useState<Product[]>([]);

  const getPopularProducts = async () => {
    const res = await getProducts({ limit: 5 });
    setPopular(res.results);
  };

  useEffect(() => {
    getPopularProducts();
  }, []);

  return (
    <section className="h-[600px] flex items-center justify-center">
      <div className="container mx-auto flex flex-col gap-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl">Populares</h1>
          <Button label="Ver todos" href="/productos" />
        </div>
        <div className="flex gap-x-8">
          {popular.map((product, key) => (
            <FeaturedCard key={key} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
