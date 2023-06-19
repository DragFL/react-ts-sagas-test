import logo from "../../images/logomarketbag.png";
import { IconContext } from "react-icons";
import { TiShoppingCart } from "react-icons/ti";

import "./MarketHeader.scss"

const MarketHeader: React.FC = () => {
    return(
      <div className='market-header__main-container'>
        <img src={logo} alt="Logoheader.png"/>
        <div className='market-header__button-header-holder'>
          <button className='market-header__button-header-container'> 
            <IconContext.Provider value={{ className: 'market-header__shopping-icon' }} >
              <TiShoppingCart />
            </IconContext.Provider>
            <div className="market-header__cash-counter">$0</div>
            
          </button>
        </div>
      </div>
    );
  }
  /* <button>X</button>*/

export default MarketHeader;   