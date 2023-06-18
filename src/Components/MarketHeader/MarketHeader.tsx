import logo from "../../images/logomarketbag.webp";
import { IconContext } from "react-icons";
import { TiShoppingCart } from "react-icons/ti";

import "./MarketHeader.scss"

const MarketHeader: React.FC = () => {
    return(
      <div className='headerMain'>
        <img src={logo} alt="Logoheader.webp"/>
        <div className='buttonHeaderHolder'>
          <div className='buttonHeaderContainer'> 
            <IconContext.Provider value={{ className: 'shoppingIcon' }} >
              <TiShoppingCart />
            </IconContext.Provider>
            <div>$0</div>
            <div>Boton X</div>
          </div>
        </div>
      </div>
    );
  }

export default MarketHeader;   