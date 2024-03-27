import React, { useEffect, useState } from 'react'
import axios from "axios";


const Home = () => {
  const [products, setproducts] = useState([])
  console.log(products);
  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((response)=>{setproducts(response.data)}).catch((errorr)=>{console.log(errorr);})
  }, [])
  
  return (
    <div>
      home
    </div>
  )
}

export default Home
