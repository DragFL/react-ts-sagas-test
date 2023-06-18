import Product from "../../Interfaces/product.interface";

import doritos from '../../images/doritos.jpg';
import cheetos from '../../images/cheetos.jpg';
import papas from '../../images/papas.jpg';
import oreo from '../../images/oreo.jpg';
import quatro from '../../images/quatro.jpg';

import MarketHeader from "../../Components/MarketHeader/MarketHeader";
import Store from "../../Components/Store/Store";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCard";

import "./Market.scss";

const Market: React.FC = () => {
    const items : Product[] =[
      {
        name: "Doritos", 
        price: 4, 
        quantity: 0, 
        imageItem: doritos, 
        alt: "doritos.jpg", 
        description: "Lorem ipsum" 
      },
      {
        name: "Papas sabor pollo", 
        price: 3, 
        quantity: 0, 
        imageItem: papas, 
        alt: "papas.jpg", 
        description: "Lorem ipsum" 
      },
      {
        name: "Galletas Oreo", 
        price: 2, 
        quantity: 0, 
        imageItem: oreo, 
        alt: "oreo.jpg", 
        description: "Lorem ipsum" 
      },
      {
        name: "Cheetos sabor natural", 
        price: 2, 
        quantity: 0, 
        imageItem: cheetos, 
        alt: "cheetos.jpg", 
        description: "Lorem ipsum" 
      },
      {
        name: "Gaseosa Quatro", 
        price: 5, 
        quantity: 0, 
        imageItem: quatro, 
        alt: "quatro.jpg", 
        description: "Lorem ipsum" 
      },
    ]
  
    return(
      <div>
        <div className='market__header-container'>
          <MarketHeader />
        </div>

        <div className="market__main-container">
          <div className="market__store-container">
            <Store items ={items} />
          </div>
    

        </div>

      </div>
  
  
    );
  }
/*
  <div>
  <ProductCard item={items[0]} />
  <ShoppingCart items={items} />

</div> */

export default Market ;  