import Product from "../../Interfaces/product.interface";

import "./ShoppingItem.scss";

type PropsTypes = {
    item: Product;
}

const ShoppingItem:React.FC <PropsTypes> = ({ item }) => {
    return(
      <div className="shopping-item__container">
        <div className="shopping-item__round-circle">0</div>
        <img className="shopping-item__image" src={item.imageItem} alt={item.alt}></img>
      </div>
    );
  }

  export default ShoppingItem;