"use client";

import { getCurrentUser } from "@lib/account";
import { toggleFavoriteProduct } from "@lib/products";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

async function isFavoriteProduct(productId: string) {
  const res = await getCurrentUser();
  const favorites = (res?.metadata as any)?.favorites || [];
  return favorites.includes(productId);
}

const FavoriteProduct = ({ productId }: { productId: string }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    isFavoriteProduct(productId).then((res) => setIsFavorite(res));
  }, []);

  async function handleFavoriteProduct() {
    const res = await toggleFavoriteProduct(productId);
    if ((res.metadata as any).favorites.includes(productId)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }

  return (
    <button
      className="absolute right-2 top-2 z-40 bg-white bg-opacity-30 hover:bg-opacity-50 backdrop-blur-lg p-1.5 rounded-lg transition-backgroundColor ease-in-out duration-500 hover:shadow-lg cursor-pointer"
      onClick={() => handleFavoriteProduct()}
    >
      <Heart size={14} className={`${isFavorite ? "text-red-500" : ""}`} />
    </button>
  );
};

export default FavoriteProduct;
