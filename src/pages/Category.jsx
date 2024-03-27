import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h2>Category: {cat_id}</h2>
      {products.map(item => (
        <p key={item.id}>{item.title}</p> 
      ))} 
    </div>
  );
};

export default Category;
