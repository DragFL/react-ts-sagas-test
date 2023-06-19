import CartProduct from "../Interfaces/cartProduct.interface";

export default function calculateTotal(cartProducts: CartProduct[]) {
  console.log("Carrito: ", cartProducts);
  if (cartProducts.length === 0 || cartProducts === undefined) {
    return 0;
  }
  const sum = cartProducts
    .map((item: CartProduct) => item.product.price * item.quantity)
    .reduce((acc: number, value: number) => acc + value, 0);
  return sum;
}
