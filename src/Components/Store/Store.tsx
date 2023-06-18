import Item from "../Item/Item";
import Product from "../../Interfaces/product.interface";

import "./Store.scss";

type PropsTypes = {
    items: Product[];
}

const Store : React.FC <PropsTypes> = ({ items }) => {

    return(
      <>
        <div className="store__label">
            Store
        </div>
        
        <div className="store__grid-container">

            <Item item = {items[3]} />
            <Item item = {items[2]} />
            <Item item = {items[0]} />
            <Item item = {items[4]} />

            <Item item = {items[4]} />
            <Item item = {items[1]} />
            <Item item = {items[2]} />
            <Item item = {items[4]} />

            <Item item = {items[2]} />
            <Item item = {items[0]} />
            <Item item = {items[2]} />
            <Item item = {items[0]} />

        </div>
      
      </>  

    );
}

export default Store;  