import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);
  return (
    <div>
      cart
      <table>
        <tr>
          <th>Products</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {cartItems.map((item)=>(
            <tr>
                <td><div style={{display:"flex"}}><img src={item.images[0]} height={70} alt="" /><p>{item.title}</p></div></td>
                <td>{item.price}.00 $</td>
                <td>{item.quantity}</td>
                <td>{parseInt(item.quantity)*parseInt(item.price)}.00 $</td>
            </tr>
        ))}
      </table>
    </div>
  );
};

export default Cart;
