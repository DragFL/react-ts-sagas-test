import Product from "./product.interface";

export default interface CartProduct {
  id?: string;
  product: Product;
  quantity: number;
}
