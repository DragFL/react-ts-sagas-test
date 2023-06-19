import { v4 as uuidv4 } from "uuid";

import doritos from "../images/doritos.jpg";
import CartProduct from "../Interfaces/cartProduct.interface";

const ShoppingCart: CartProduct[] = [];

class ShoppingCartApi {
  static async add(item: CartProduct) {
    return new Promise((resolve) => {
      const targetIndex = ShoppingCart.findIndex(
        (x) => x.product.id === item.product.id
      );

      if (targetIndex > -1) {
        ShoppingCart[targetIndex].quantity += 1;
      } else {
        ShoppingCart.push(item);
      }

      setTimeout(() => resolve(ShoppingCart), 300);
    });
  }

  static async delete(id: any) {
    return new Promise((resolve) => {
      const targetIndex = ShoppingCart.findIndex((x) => x.product.id === id);
      if (targetIndex === -1) {
        new Error("Failed to delete.");
      }

      if (ShoppingCart[targetIndex].quantity === 1) {
        ShoppingCart.splice(targetIndex, 1);
      } else {
        ShoppingCart[targetIndex].quantity -= 1;
      }

      setTimeout(() => resolve(ShoppingCart), 300);
    });
  }

  static async getAll() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(ShoppingCart), 300);
    });
  }
}

export default ShoppingCartApi;
