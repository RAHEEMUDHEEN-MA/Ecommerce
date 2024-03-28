import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useHistory} from "react-router-dom";
import logo from "../assests/images/shopLogo.png";
import cart from "../assests/images/image.png";
import "../assests/styles/NavBar.css";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";

const NavBar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [categories, setcategories] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((response) => {
        setcategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(`category/${selectedPath}`);
    }
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link className="nav-logo-link" to="/">
          <img
            src={logo}
            alt="ShoPY Logo"
            height={40}
            style={{ marginRight: "10px" }}
          />
          <p>ShoPY</p>
        </Link>
        <div className="links-holder">
          <Link className="links" id="homebtn" to="/">
            Home
          </Link>
          <select id="catgorylist" className="links" defaultValue="" onChange={handleChange}>
            <option>Category</option>

            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <Link className="links" id="userss" to="/users">
            Users
          </Link>
        </div>
      </div>
      <ul className="nav-menu"></ul>
      <div className="nav-login-cart">
        {/* <Link to='/login'><button className='log_btn'>Login</button></Link> */}

        <Link to="/cart">
          <div className="nav-cart-count">{getTotalCartItems()}</div>
          <img src={cart} alt="" className="cart" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
