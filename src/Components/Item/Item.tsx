import Product from "../../Interfaces/product.interface";

import { useDispatch } from "react-redux";
import { getProductFetch } from "../../Redux/Actions";

import "./Item.scss";

type PropsTypes = {
    item : Product ;
}

const Item: React.FC <PropsTypes> =({ item }) =>{

    const dispatch = useDispatch();

    function handleClick(id:number){
      console.log("El  desde el front id: ", id);
      dispatch(getProductFetch(id));
    }

    return(
    <div className="item__container" onClick={()=> handleClick(item.id)}>
      <div className="item__round-circle">0</div>
      <img className="item__image" src={item.imageItem} alt={item.alt}></img>
    </div>
    );
  }

  export default Item;