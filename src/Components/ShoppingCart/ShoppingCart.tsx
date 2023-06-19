import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../../Interfaces/cartProduct.interface";
import { setRoute } from "../../Redux/Actions/Actions";
import calculateTotal from "../../Util/CalculateTotal";
import PayButton from "../PayButton/PayButton";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

import "./ShoppingCart.scss";

const ShoppingCard: React.FC = () => {
  const cartProducts = useSelector(
    (state: any) => state.productCartReducer.cartProducts
  );
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    setTotalValue(calculateTotal(cartProducts));
  }, [JSON.stringify(cartProducts)]);

  if (cartProducts === undefined) {
    return <div>Loading</div>;
  }

  const productList = cartProducts.map((product: CartProduct) => {
    return (
      <ShoppingItem
        key={product.product.id}
        item={product.product}
        quantity={product.quantity}
      />
    );
  });

  return (
    <>
      <h2 className="shopping-card__label">Shopping Cart</h2>
      <div className="shopping-card__items-list">{productList}</div>
      <div className="shopping-card__flex-container">
        <h3 className="shopping-card__price-label">Total:</h3>
        <h3 className="shopping-card__price">$ {totalValue}</h3>
      </div>
      <PayButton price={totalValue} />
    </>
  );
};

export default ShoppingCard;
