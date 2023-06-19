import Product from "../Interfaces/product.interface";

import doritos from "../images/doritos.jpg";
import cheetos from "../images/cheetos.jpg";
import papas from "../images/papas.jpg";
import oreo from "../images/oreo.jpg";
import quatro from "../images/quatro.jpg";

const items: Product[] = [
  {
    id: 1,
    name: "Doritos",
    price: 8000,
    imageItem: doritos,
    alt: "doritos.jpg",
    description: "Lorem ipsum",
  },
  {
    id: 2,
    name: "Papas sabor pollo",
    price: 6000,
    imageItem: papas,
    alt: "papas.jpg",
    description: "Lorem ipsum",
  },
  {
    id: 3,
    name: "Galletas Oreo",
    price: 4000,
    imageItem: oreo,
    alt: "oreo.jpg",
    description: "Lorem ipsum",
  },
  {
    id: 4,
    name: "Cheetos sabor natural",
    price: 2000,
    imageItem: cheetos,
    alt: "cheetos.jpg",
    description: "Lorem ipsum",
  },
  {
    id: 5,
    name: "Gaseosa Quatro",
    price: 5000,
    imageItem: quatro,
    alt: "quatro.jpg",
    description: "Lorem ipsum",
  },
];

class ProductsApi {
  static async getAll() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(items);
      }, 300)
    );
  }

  static async getOne(id: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(items.filter((item) => item.id === id)[0]);
    }, 300)
  );
}

}


export default ProductsApi;