import Product from "../../Interfaces/product.interface";

type PropsTypes = {
    item : Product ;
}

const ItemContainer: React.FC <PropsTypes> =({ item }) =>{
    return(
    <div>
      <div className='round-circle'>{item.quantity}</div>
      <img src={item.imageItem} alt={item.alt}></img>
    </div>
    );
  }

  export default ItemContainer;