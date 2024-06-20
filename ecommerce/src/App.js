import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Signup from './Pages/Signup';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Layout/> }>
          <Route index element = { <Home /> } />
          <Route path='about' element = { <About /> } />
          <Route path='contact' element = { <Contact /> } />
          <Route path='store' element = { <OurStore /> } />
          <Route path='blogs' element = { <Blog /> } />
          <Route path='compare-product' element = { <CompareProduct /> } />
          <Route path='wishlist' element = { <Wishlist /> } />
          <Route path='login' element = { <Login /> } />
          <Route path='forgot-password' element = { <ForgotPassword /> } />
          <Route path='signup' element = { <Signup /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
