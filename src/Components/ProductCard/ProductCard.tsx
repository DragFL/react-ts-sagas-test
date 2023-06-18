import Product from "../../Interfaces/product.interface";

type PropsTypes = {
    item: Product;
}

const ProductCard: React.FC <PropsTypes> = ({ item }) => {
    return(
      <div>
        <div className='round-circle'>{item.quantity}</div>
        <img src={item.imageItem} alt={item.alt}></img>
        <div>Name</div>
        <div>Price</div>
        <div>+</div>
        <div>-</div>
        <div>Description</div>
      </div>
  
    );
  }

export default ProductCard;  