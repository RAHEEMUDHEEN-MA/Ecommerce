import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import "../assests/styles/Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);
  console.log(cartItems);
  const grandTotal = cartItems.reduce((total, item) => {
    return total + parseInt(item.quantity) * parseInt(item.price);
  }, 0);
  return (
    <div>
      <div className="cartHead">
        {" "}
        <p>CART</p>
        <div></div>
      </div>

      <div className="cart-main-div">
        <table>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
          <br />
          {cartItems.map((item) => (
            <tr>
              <td>
                <img src={item.images[0]} height={90} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.price}.00 $</td>
              <td>{item.quantity}</td>
              <td>{parseInt(item.quantity) * parseInt(item.price)}.00 $</td>
              <td
                onClick={() => removeFromCart(item.id)}
                className="remove-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </td>
            </tr>
          ))}
        </table>

        <div className="cartitems-down">
        
            <h3>Cart Totals</h3>
           
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${grandTotal}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${grandTotal}</h3>
              </div>
            
            <button id="buy-btn">PROCEED TO CHECKOUT</button>
          
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
