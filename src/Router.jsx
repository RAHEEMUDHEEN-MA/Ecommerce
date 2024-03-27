import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Category from './pages/Category';


const Router = () => {
  return ( 
    <div>
       <BrowserRouter>
       <NavBar/>
          <Routes>
            

            <Route  path="/" element={<><Home/></>} />
            <Route  path="/category/:cat_id" element={<><Category/></>} />
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
