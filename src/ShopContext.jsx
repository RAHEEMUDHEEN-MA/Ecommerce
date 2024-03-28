import React, { createContext, useEffect, useState } from "react";
import  axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setall_product] = useState();
  const [cartItems, setcartItems] = useState([]);

//   console.log("cart", cartItems);
//   console.log("all_product", all_product);


    useEffect(() => {
     axios.get("https://api.escuelajs.co/api/v1/products").then((response)=>{setall_product(response.data)}).catch((error)=>{console.log(error);})
    }, [])
    


  const addToCart = (itemId, quantity) => {
 
    //   console.log(itemId,quantity)
      const cartProduct=all_product.find((product)=>product.id===parseInt(itemId))
    //   console.log("cartproduct",cartProduct);
      cartProduct.quantity = quantity;
      setcartItems([...cartItems, cartProduct]);
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const removeFromCart = (itemId) => {
    setcartItems(cartItems.filter((product) => product.id !== itemId));
    window.scrollTo({ top: 0, behavior: "smooth" });

  };

  const getTotalCartAmount = () => {
    return cartItems.reduce(
      (total, product) => total + product.new_price * product.quantity,
      0
    );
  };

  const getTotalCartItems = () => {
    return cartItems.length;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
