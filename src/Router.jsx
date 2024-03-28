import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';


const Router = () => {
  return ( 
    <div>
       <BrowserRouter>
       <NavBar/>
      
          <Routes>
            
hi
            <Route  path="/" element={<><Home/></>} />
            <Route  path="/category/:cat_id" element={<><Category/></>} />
            <Route  path="/product/:product_id" element={<><Product/></>} />
            <Route  path="/cart" element={<><Cart/></>} />
            {/* <Route  path="/" element={<><Home/> </>} />
            <Route  path="/" element={<><Home/> </>} />
            <Route  path="/" element={<><Home/> </>} />
            <Route  path="/" element={<><Home/> </>} />
            <Route  path="/" element={<><Home/> </>} />
            <Route  path="/" element={<><Home/> </>} /> */}
          </Routes> 
        </BrowserRouter>
    </div>
  ) 
}
 
export default Router
