import ItemContainer from "../Item/Item";
import Product from "../../Interfaces/product.interface";

type PropsTypes = {
    items: Product[];
}

const Store : React.FC <PropsTypes> = ({ items }) => {

    return(
      <div>
        <div>Column 1
          <ItemContainer item = {items[3]} />
          <ItemContainer item = {items[2]} />
          <ItemContainer item = {items[0]} />
          <ItemContainer item = {items[4]} />
        </div>
        <div>Column 2
          <ItemContainer item = {items[1]} />
          <ItemContainer item = {items[4]} />
          <ItemContainer item = {items[2]} />
          <ItemContainer item = {items[4]} />
        </div>
        <div>Column 3
          <ItemContainer item = {items[2]} />
          <ItemContainer item = {items[0]} />
          <ItemContainer item = {items[4]} />
          <ItemContainer item = {items[0]} />
        </div>
      </div>
    );
}

export default Store;  