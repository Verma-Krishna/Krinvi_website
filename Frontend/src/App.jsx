import React from "react";
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Cart from "./Component/Cart"
import Contact from "./Component/Contact"
import Checkout from "./Component/Checkout"
import AboutUs from "./Component/AboutUs"
import ReturnRfund from "./Component/ReturnRfund"
import Terms from "./Component/Terms"
import FAQ from "./Component/FAQ"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import PaymentPolicy from "./Component/PaymentPolicy";
import Profile from "./Component/Profile";
import { Provider } from "react-redux";
import Store from "./Redux/Store"
import Innerhome from "./Component/Innerhome";

const App = ()=>{
  return (
    <>
    <Provider store={Store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/innerhome" element={<Innerhome/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/FAQ" element={<FAQ/>}/>
      <Route path="/Payment" element={<PaymentPolicy/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/return_refund" element={<ReturnRfund/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App



