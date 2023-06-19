import Product from "../../Interfaces/product.interface";

import "./ShoppingItem.scss";

type PropsTypes = {
    item: Product;
    quantity: number;
}

const ShoppingItem:React.FC <PropsTypes> = ({ item , quantity}) => {
    return(
      <div className="shopping-item__container">
        <div className="shopping-item__round-circle">{quantity}</div>
        <img className="shopping-item__image" src={item.imageItem} alt={item.alt}></img>
      </div>
    );
  }

  export default ShoppingItem;