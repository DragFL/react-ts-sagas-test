import Product from "../../Interfaces/product.interface";

import "./ProductCard.scss";

import { useDispatch, useSelector } from "react-redux";
import { addProductCart, removeProductCart } from "../../Redux/Actions/Actions";

const ProductCard: React.FC = () => {
  const dispatch = useDispatch();
  const product = useSelector(
    (state: any) => state.getProductReducer.selectedProduct
  );

  function handleClickPlus(item: Product) {
    if (item === undefined) return;

    const producCart = {
      product: item,
      quantity: 1,
    };

    dispatch(addProductCart(producCart));
  }

  function handleClickMinus(id: number) {
    if (id === undefined) return;

    dispatch(removeProductCart(id));
  }

  if (product == undefined) {
    return <div>Loading</div>;
  }

  return (
    <>
      <h2 className="product-card__label">Product</h2>

      <div className="product-card__main-body">
        <div className="product-card__round-circle">{product.quantity}</div>
        <img
          className="product-card__image"
          src={product.imageItem}
          alt={product.alt}
        ></img>
        <div className="product-card__counter">
          <div className="product-card__name-holder">{product.name}</div>
          <div className="product-card__dot">&bull;</div>
          <div className="product-card__price-holder">$ {product.price}</div>
          <button
            className="button-style product-card__price-button--1"
            onClick={() => handleClickMinus(product.id)}
          >
            -
          </button>
          <button
            className="button-style product-card__price-button--2"
            onClick={() => handleClickPlus(product)}
          >
            +
          </button>
        </div>
        <p className="product-card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio
          turpis, viverra sit amet tellus et, semper egestas velit. Vestibulum
          vitae turpis et nisi cursus rhoncus. Sed luctus sodales turpis vitae
          vestibulum. Morbi luctus mi vel nulla ultricies, sit amet aliquam leo
          rhoncus
        </p>
      </div>
    </>
  );
};

export default ProductCard;
