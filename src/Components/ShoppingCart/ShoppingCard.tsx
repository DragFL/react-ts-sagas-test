import ShoppingItem from "../ShoppingItem/ShoppingItem";
import Product from "../../Interfaces/product.interface";

import "./ShoppingCard.scss";

type PropsTypes ={
  items: Product[];
}

const ShoppingCard:React.FC <PropsTypes> = ({items}) => {
  return(
    <>
      <h2  className="shopping-card__label">
        Shopping Cart
      </h2 >
      <div className="shopping-card__items-list">
        <ShoppingItem item={items[2]}/>
        <ShoppingItem item={items[3]}/>
      </div>
      <div>Total valor</div>
      <div>Boton Wompi</div>
    </>
  );
}

export default ShoppingCard;
