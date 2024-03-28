import React, { useEffect, useState } from "react";
import axios from "axios";
import  {useNavigate}  from "react-router-dom";
import  "../assests/styles/Home.css";

const Home = () => {
  const [products, setproducts] = useState([]);
  const navigate=useNavigate()
  console.log(products);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setproducts(response.data);
      })
      .catch((errorr) => {
        console.log(errorr);
      });
  }, []);

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
     
      {products.length>1?<div className="home-main-container">
        <div className="home-left-container">
          <div  >
            {" "}
            <p className="new">NEW REALEASED</p>
            <p className="name">
              Sleek Modern <br /> Laptop for <br /> Professionals
             </p>
             <button className="shop-btn" onClick={()=>navigate(`/category/${2}`)}>Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
</svg></button>
          </div>
        
        </div>
        <div className="home-right-container">
          <div className="right-top-conatiner"><div>
            {" "} 
            <p className="new">NEW REALEASED</p>
            <p className="name">
            Vibrant Runner <br /> Sneakers <br />for Comfort
            </p>
            <button className="shop-btn" onClick={()=>navigate(`/category/${4}`)}>Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
</svg></button>          </div>
          <div>
          </div></div>
          <div className="right-bottom-conatiner"> <div>
            {" "}
            <p className="new">NEW REALEASED</p>
            <p className="name">
            Modern Ergonomic  <br /> Office Chair  <br /> 
            </p>
            <button className="shop-btn" onClick={()=>navigate(`/category/${3}`)}>Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
</svg></button>          </div>
          <div>
            {/* <img src={products[10].images[0]} alt="" height={250} /> */}
          </div>
          </div>
        </div>
      </div>: <div className="loader"><p>loading</p></div> }
    </div>
  );
};

export default Home;
