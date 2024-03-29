import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/wishlist';
import Login from './pages/Login';
import Forgetpassword from './pages/Forgetpassword';
import SignUp from './pages/SignUp';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivatePolicy from './pages/PrivatePolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondition from './pages/TermAndCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { PrivateRoutes } from './routing/privateRoutes';
import { OpenRoutes } from './routing/OpenRoutes';
import Orders from './pages/orders';
import Profile from './pages/Profile';
import StoreCategory from './pages/ShopCategory';
import Blogs from './pages/Blogs';

function App() { 
  return (
   <><BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={ <Home/>} />

    <Route path='about' element={ <About/>} />
    <Route path='contact' element={ <Contact/>} />
    <Route path='store' element={ <OurStore/>} />
    
    <Route path='store/:id' element={ <StoreCategory/>} />
    <Route path='blogs' element={ <Blog/>} />
    <Route path='blogs/:id' element={ <Blogs/>} />
    <Route path='blog/:id' element={ <SingleBlog/>} />
    <Route path='product/:id' element={ <SingleProduct/>} />
    <Route path='compare-product' element={ <CompareProduct/>} />
    <Route path='wishlist' element={ <PrivateRoutes> <Wishlist/></PrivateRoutes> } />
    <Route path='my-orders' element={ <PrivateRoutes> <Orders/></PrivateRoutes> } />
    <Route path='my-profile' element={ <PrivateRoutes> <Profile/></PrivateRoutes> } />
    <Route path='login' element={ <OpenRoutes><Login/></OpenRoutes>} />
    <Route path='forgot-password' element={ <Forgetpassword/>} />
    <Route path='reset-password/:token' element={ <Resetpassword/>} />
    <Route path='signup' element={<SignUp/> } />
    <Route path='privacy-policy' element={ <PrivatePolicy/>} />
    <Route path='refund-policy' element={ <RefundPolicy/>} />
    <Route path='shipping-policy' element={ <ShippingPolicy/>} />
    <Route path='term-conditions' element={ <TermAndCondition/>} />
    <Route path='cart' element={ <PrivateRoutes><Cart/></PrivateRoutes>} />
    <Route path='checkout' element={<PrivateRoutes><Checkout/></PrivateRoutes> } />
  </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
