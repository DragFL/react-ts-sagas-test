import Product from "../../Interfaces/product.interface";

import "./Item.scss";

type PropsTypes = {
    item : Product ;
}

const Item: React.FC <PropsTypes> =({ item }) =>{
    return(
    <div className="item__container">
      <div className="item__round-circle">{item.quantity}</div>
      <img className="item__image" src={item.imageItem} alt={item.alt}></img>
    </div>
    );
  }

  export default Item;