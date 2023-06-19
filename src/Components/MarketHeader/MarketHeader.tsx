import logo from "../../images/logomarketbag.png";
import { IconContext } from "react-icons";
import { TiShoppingCart } from "react-icons/ti";

import { useDispatch, useSelector } from "react-redux";

import "./MarketHeader.scss"
import calculateTotal from "../../Util/CalculateTotal";
import { useEffect, useState } from "react";
import { setRoute } from "../../Redux/Actions/Actions";

const MarketHeader: React.FC = () => {

  const dispatch = useDispatch();
  const cartProducts = useSelector((state:any) => state.productCartReducer.cartProducts);
    const [totalValue, setTotalValue] = useState(0);
    
    useEffect(()=>{
      setTotalValue(calculateTotal(cartProducts));
    }, [JSON.stringify(cartProducts)]);

    function handleClick(){
      dispatch(setRoute("shoppingCart"));
    }

      

    return(
      <div className='market-header__main-container'>
        <img src={logo} alt="Logoheader.png"/>
        <div className='market-header__button-header-holder'>
          <button 
            className='market-header__button-header-container'
            onClick={()=>handleClick()}  
          > 
            <IconContext.Provider value={{ className: 'market-header__shopping-icon' }} >
              <TiShoppingCart />
            </IconContext.Provider>
            <div className="market-header__cash-counter">${totalValue}</div>
            
          </button>
        </div>
      </div>
    );
  }
  /* <button>X</button>*/

export default MarketHeader;   