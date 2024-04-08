import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import tshirts_banner from './Components/Assets/banner_tshirts.mp4';
import joggers_banner from './Components/Assets/banner_joggers.mp4';
import shoes_banner from './Components/Assets/banner_shoes.mp4';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/t-shirts' element={<ShopCategory banner={tshirts_banner} category="T-shirts" />} />
          <Route path='/joggers' element={<ShopCategory banner={joggers_banner} category="Joggers" />} />
          <Route path='/shoes' element={<ShopCategory banner={shoes_banner} category="Shoes" />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

