import { getCart } from "@lib/cart";

const CartPage = async () => {
  const res = await getCart();
  console.log("CARRITO", res);
  return <div>Cart</div>;
};

export default CartPage;
