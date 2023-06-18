import logo from "../../images/logomarketbag.png";
import { IconContext } from "react-icons";
import { TiShoppingCart } from "react-icons/ti";

import "./MarketHeader.scss"

const MarketHeader: React.FC = () => {
    return(
      <div className='headerMain'>
        <img src={logo} alt="Logoheader.png"/>
        <div className='market-header__button-header-holder'>
          <div className='market-header__button-header-container'> 
            <IconContext.Provider value={{ className: 'market-header__shopping-icon' }} >
              <TiShoppingCart />
            </IconContext.Provider>
            <div>$0</div>
            <button>X</button>
          </div>
        </div>
      </div>
    );
  }

export default MarketHeader;   