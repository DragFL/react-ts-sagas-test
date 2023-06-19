import Product from "../../Interfaces/product.interface";

import "./ProductCard.scss";

import { useSelector } from "react-redux";
import { getProductFetch } from "../../Redux/Actions";

const ProductCard: React.FC = () => {
  const product = useSelector((state: any) => state.reducer.selectedProduct);

  if (product == undefined) {
    return <div>UwU</div>;
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
          <div className="product-card__name-holder">Name</div>
          <div className="product-card__dot">&bull;</div>
          <div className="product-card__price-holder">$69</div>
          <button className="button-style product-card__price-button--1">
            -
          </button>
          <button className="button-style product-card__price-button--2">
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
