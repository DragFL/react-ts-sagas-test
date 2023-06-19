import MarketHeader from "../../Components/MarketHeader/MarketHeader";
import Store from "../../Components/Store/Store";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCart";

import "./Market.scss";

const Market: React.FC = () => {

  
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
            
            <ProductCard />
            
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