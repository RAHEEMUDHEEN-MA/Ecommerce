import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductTile from '../components/ProductTile';
import "../assests/styles/Category.css";


const Category = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const { cat_id } = useParams();
  console.log(cat_id);

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/categories/${cat_id}/products`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [cat_id]); 

  return (
    <div className='productGrid' >
  {products.length > 1 ? (
    products.map((item) => (
      item.images && item.images.length > 0 && !item.images[0].includes("https://placeimg.com/") ? (
        <ProductTile key={item.id} image={item.images[0]} title={item.title} price={item.price} id={item.id} />
      ) : null
    ))
  ) : (
    <div className="loader">
      <p>loading</p>
    </div>
  )}
</div>



  );
};

export default Category;
