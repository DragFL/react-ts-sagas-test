import ShoppingItem from "../ShoppingItem/ShoppingItem";
import Product from "../../Interfaces/product.interface";

type PropsTypes ={
  items: Product[];
}

const ShoppingCart:React.FC <PropsTypes> = ({items}) => {
  return(
    <div>
      <div>
        <ShoppingItem item={items[2]}/>
        <ShoppingItem item={items[3]} />
        <ShoppingItem item={items[0]}/>
      </div>
      <div>Total valor</div>
      <div>Boton Wompi</div>
    </div>
  );
}

export default ShoppingCart;
