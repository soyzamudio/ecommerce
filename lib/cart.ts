import swell from "swell-js";

// Initialize the client first
swell.init("coracosmetics", "pk_ZUb02oMLQ1vp6XgXTUUUUJWeieKWy4xg", {
  useCamelCase: true,
});

export async function getCart() {
  return await swell.cart.get();
}

export function addToCart({
  productId,
  variantId,
  quantity,
}: {
  productId: string;
  variantId: string;
  quantity: number;
}) {
  return swell.cart.addItem({
    productId,
    variantId,
    quantity,
  });
}
