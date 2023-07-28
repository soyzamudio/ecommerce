import swell from "swell-js";

// Initialize the client first
swell.init("coracosmetics", "pk_ZUb02oMLQ1vp6XgXTUUUUJWeieKWy4xg", {
  useCamelCase: true,
});

export function getCart() {
  return swell.cart.get();
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

export function removeItem(variantId: string) {
  return swell.cart.removeItem(variantId);
}

export function updateCartItem({
  variantId,
  quantity,
}: {
  variantId: string;
  quantity: number;
}) {
  return swell.cart.updateItem(variantId, {
    quantity,
  });
}
