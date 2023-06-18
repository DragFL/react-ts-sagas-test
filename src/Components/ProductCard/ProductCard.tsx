import Product from "../../Interfaces/product.interface";

import "./ProductCard.scss"

type PropsTypes = {
    item: Product;
}

const ProductCard: React.FC <PropsTypes> = ({ item }) => {
    return(
      <>
        <h2 className="product-card__label">
            Product
        </h2>

        <div className="product-card__main-body">
          <div className="product-card__round-circle">{item.quantity}</div>
          <img className="product-card__image" src={item.imageItem} alt={item.alt}></img>
          <div className="product-card__counter">
            <div className="product-card__name-holder">Name</div>
            <div className="product-card__dot">&bull;</div>
            <div className="product-card__price-holder">$69</div>
            <button className="button-style product-card__price-button--1">-</button>
            <button className="button-style product-card__price-button--2">+</button>
          </div>
          <p className="product-card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio turpis, viverra sit amet tellus et, semper egestas velit. Vestibulum vitae turpis et nisi cursus rhoncus. Sed luctus sodales turpis vitae vestibulum. Morbi luctus mi vel nulla ultricies, sit amet aliquam leo rhoncus</p>
        </div>
      
      </>

  
    );
  }

export default ProductCard;  