import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";
import  "../assests/styles/Product.css";

const Product = () => {
    const {product_id}=useParams()
    const [product, setproduct] = useState()
    console.log(product);
    useEffect(() => {

   axios.get(`https://api.escuelajs.co/api/v1/products/${product_id}`).then((response)=>{setproduct(response.data)}).catch((error)=>{console.log(error);})
    }, [product_id])
    

  return (
    <div>
       {product ? (
   <div className='product-conatainer'>
    <div>
      <img src={product.images} alt="" height={500} />
    </div>
    <div className='details-container'>
      <p className="catname">{product.category.name}</p>
      <p className="productname">{product.title}</p>
      <p className="productprice">{product.price}.00 $</p>
      <div className='min_img'>{product.images.map((image)=>(<><img src={image} height={50} alt="" /></>))}</div>
      <p className="prodiscription">{product.description}</p>
      <div>
        <button id='cartbtn'>Add to Cart</button>
      </div>
    </div>
   </div> 
  ) : (
    <div className="loader">
      <p>loading</p>
    </div>
  )}
    </div>
  )
}

export default Product
