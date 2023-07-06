import swell from "swell-js";

// Initialize the client first
swell.init("coracosmetics", "pk_ZUb02oMLQ1vp6XgXTUUUUJWeieKWy4xg", {
  useCamelCase: true,
});

export async function getProducts({
  page = 1,
  limit = 20,
  search = "",
  category,
}: {
  page?: number;
  limit?: number;
  search?: string;
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

  return swell.products.list(params);
}

export function getProductBySlug(slug: string) {
  return swell.products.get(slug, {
    expand: ["variants", "categories"],
  });
}
