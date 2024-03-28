import { useNavigate } from "react-router-dom";
import "../assests/styles/ProductTile.css";

const ProductTile = ({ image, title, id ,price}) => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate(`/product/${id}`);
  };
  // function handleImageError(event) {
  //   event.target.src = 'fallback_image_url.jpg'; // Replace with your fallback image URL
  //   event.target.alt = 'https://images.app.goo.gl/h4wbdKdJSuoieDQP8'; // Replace with a description of the fallback image
  // }
  

  return (
    <div className="product-tile" >
      <img onClick={handlenavigate} src={image} height={200} alt=""/>
      <h4 id="product_title">{title}</h4>
      <p id="product_price">{price}.00 $</p>
      <div className="btn-div"><button>Add to Cart</button> </div>
    </div>
  );
};

export default ProductTile;
