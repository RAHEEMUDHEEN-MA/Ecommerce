import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../assests/styles/Product.css";
import { ShopContext } from "../ShopContext";

const Product = () => {
  const { addToCart } = useContext(ShopContext);
  const { product_id } = useParams();
  const [product, setproduct] = useState(null);
  const [imgindex, setImgIndex] = useState(0);
  // console.log(imgindex);
  // console.log(product);
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${product_id}`)
      .then((response) => {
        setproduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [product_id]);

  const handleAddCart = () => {
    addToCart(product_id, 1);
  };
  const changeImage = (index) => {
    setImgIndex(index);
  };
  return (
    <div>
      {product ? (
        <div className="product-conatainer">
          <div>
            <img src={product.images[imgindex]} alt="" height={500} />
          </div>
          <div className="details-container">
            <p className="catname">{product.category.name}</p>
            <p className="productname">{product.title}</p>
            <p className="productprice">{product.price}.00 $</p>
            <div className="min_img">
            {product.images.map((image, index) => (
                <img
                  key={index}
                  onClick={() => changeImage(index)}
                  src={image}
                  height={50}
                  alt=""
                />
              ))}
            </div>
            <p className="prodiscription">{product.description}</p>
            <div>
              <button id="cartbtn" onClick={handleAddCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default Product;
