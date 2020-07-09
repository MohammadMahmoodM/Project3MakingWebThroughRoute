import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { NotFound } from './components/NotFound';

 
function App() {
  return (
    <BrowserRouter>       {/*This is main Wraper*/}
      <Header />
                            {/*From Here We will start from routes and routes for create different links*/}
          <Routes>
              <Route path="/" element={<Home />} > </Route>
              <Route path="Products" element={<Products />}>
                
                <Route path=":productID" element={<ProductDetails />}></Route>
              </Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
