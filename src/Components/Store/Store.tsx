import Item from "../Item/Item";


import { useDispatch, useSelector } from "react-redux";
import { getProductsFetch } from "../../Redux/Actions/Actions";

import "./Store.scss";
import { useEffect } from "react";

const Store : React.FC = () => {

  const dispatch = useDispatch();
  const products = useSelector((state:any) => state.getProductsReducer.products);

  useEffect(()=>{
    dispatch(getProductsFetch());
    
  }, []);
 
  if(products === undefined){
    return <div>Loading</div>
  }
 
  const productList = products.map((product:any)=>{
    return <Item key={product.id} item = {product} />
  });
    return(
      <>
        <h2  className="store__label">
            Store
        </h2 >
        
        <div className="store__grid-container">
          {productList}
        </div>
      
      </>  

    );
}

/*

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
*/

export default Store;  