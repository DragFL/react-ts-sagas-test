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
    price: 4,
    imageItem: doritos,
    alt: "doritos.jpg",
    description: "Lorem ipsum",
  },
  {
    id: 2,
    name: "Papas sabor pollo",
    price: 3,
    imageItem: papas,
    alt: "papas.jpg",
    description: "Lorem ipsum",
  },
  {
    id: 3,
    name: "Galletas Oreo",
    price: 2,
    imageItem: oreo,
    alt: "oreo.jpg",
    description: "Lorem ipsum",
  },
  {
    id: 4,
    name: "Cheetos sabor natural",
    price: 2,
    imageItem: cheetos,
    alt: "cheetos.jpg",
    description: "Lorem ipsum",
  },
  {
    id: 5,
    name: "Gaseosa Quatro",
    price: 5,
    imageItem: quatro,
    alt: "quatro.jpg",
    description: "Lorem ipsum",
  },
];

export function clearlyNotAxiosGet() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(items);
    }, 300)
  );
}

export function clearlyNotAxiosGetOne (id:number){
    return new Promise((resolve) =>
    setTimeout(() => {
      resolve(items.filter((item) => item.id === id )[0]);
    }, 300)
  );
}

