import swell from "swell-js";

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
