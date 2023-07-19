import swell from "swell-js";
import { getCurrentUser } from "./account";

// Initialize the client first
swell.init("coracosmetics", "pk_ZUb02oMLQ1vp6XgXTUUUUJWeieKWy4xg", {
  useCamelCase: true,
});

export async function getProducts({
  page = 1,
  limit = 20,
  search = "",
  tag,
  category,
}: {
  page?: number;
  limit?: number;
  search?: string;
  tag?: string;
  category?: string;
}) {
  const params: any = {
    search,
    limit,
    page,
    expand: ["variants", "categories"],
  };

  if (category) {
    params["category"] = category;
  }

  if (tag) {
    params["tags"] = tag;
  }

  return swell.products.list(params);
}

export function getProductBySlug(slug: string) {
  return swell.products.get(slug, {
    expand: ["variants", "categories"],
  });
  
}

export async function toggleFavoriteProduct(productId: string) {
  const user = await getCurrentUser();
  const favorites = (user.metadata as any).favorites;
  const index = favorites.indexOf(productId);

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(productId);
  }
  
  return await swell.account.update({
    $set: {
      metadata: {
        favorites
      }
    }
  } as any);
}
