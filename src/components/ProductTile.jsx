import { useNavigate } from "react-router-dom";
import "../assests/styles/ProductTile.css";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";

const ProductTile = ({ image, title, id ,price}) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(ShopContext);

  const handlenavigate = () => {
    navigate(`/product/${id}`);
  };
 
  const handleAddcart=()=>{
    addToCart(id,1)
  }
 

  return (
    <div className="product-tile" >
      <img onClick={handlenavigate} src={image} height={200} alt=""/>
      <h4 id="product_title">{title}</h4>
      <p id="product_price">{price}.00 $</p>
      <div className="btn-div"><button onClick={handleAddcart}>Add to Cart</button> </div>
    </div>
  );
};

export default ProductTile;
