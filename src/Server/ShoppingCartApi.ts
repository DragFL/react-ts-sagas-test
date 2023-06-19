import CartProduct from "../Interfaces/cartProduct.interface";

//const ShoppingCart: CartProduct[] = [];

class ShoppingCartApi {
  static async add(item: CartProduct) {
    return new Promise((resolve) => {
      const getStorage = localStorage.getItem("shoppingCart");
      let ShoppingCart: CartProduct[];

      if (getStorage === null) {
        ShoppingCart = [];
      } else {
        ShoppingCart = JSON.parse(getStorage);
      }

      const targetIndex = ShoppingCart.findIndex(
        (x) => x.product.id === item.product.id
      );

      if (targetIndex > -1) {
        ShoppingCart[targetIndex].quantity += 1;
      } else {
        ShoppingCart.push(item);
      }
      localStorage.setItem("shoppingCart", JSON.stringify(ShoppingCart));
      setTimeout(() => resolve(ShoppingCart), 300);
    });
  }

  static async delete(id: any) {
    return new Promise((resolve) => {
      const getStorage = localStorage.getItem("shoppingCart");
      let ShoppingCart: CartProduct[];

      if (getStorage === null) {
        ShoppingCart = [];
      } else {
        ShoppingCart = JSON.parse(getStorage);
      }

      const targetIndex = ShoppingCart.findIndex((x) => x.product.id === id);
      if (targetIndex === -1) {
        new Error("Failed to delete.");
      }

      if (ShoppingCart[targetIndex].quantity === 1) {
        ShoppingCart.splice(targetIndex, 1);
      } else {
        ShoppingCart[targetIndex].quantity -= 1;
      }

      localStorage.setItem("shoppingCart", JSON.stringify(ShoppingCart));
      setTimeout(() => resolve(ShoppingCart), 300);
    });
  }

  static async getAll() {

    return new Promise((resolve) => {
      const getStorage = localStorage.getItem("shoppingCart");
      let ShoppingCart: CartProduct[];
  
      if (getStorage === null) {
        ShoppingCart = [];
      } else {
        ShoppingCart = JSON.parse(getStorage);
      }
      setTimeout(() => resolve(ShoppingCart), 300);
    });
  }
}

export default ShoppingCartApi;
