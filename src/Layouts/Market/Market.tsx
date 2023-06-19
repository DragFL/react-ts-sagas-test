import MarketHeader from "../../Components/MarketHeader/MarketHeader";
import Store from "../../Components/Store/Store";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCart";
import DefaultSecondary from "../../Components/DefaultSecondary/DefaultSecondary";

import "./Market.scss";
import { useSelector } from "react-redux";

const Market: React.FC = () => {
  const route = useSelector((state:any) => state.routeReducer.route);
  
    return(
      <div>
        <div className='market__header-container'>
          <MarketHeader />
        </div>

        <div className="market__main-container">

          <div className="market__store-container">
            <Store />
          </div>

          <div className="market__secondary-container">
            {(route === "" ) ?  <DefaultSecondary/> : null }
            {(route === "productCard" ) ?  <ProductCard/> : null }
            {(route === "shoppingCart" ) ?  <ShoppingCart/> : null }            
          </div>
        </div>

      </div>
  
  
    );
  }
/*
  <ShoppingCart items={items} />
  <ProductCard item={items[0]} /> 
  */

export default Market ;  