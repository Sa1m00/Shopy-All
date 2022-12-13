import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import CartProvider from "./components/Shop/Context";


function App() {
  return (
    <div className="app">
      <CartProvider>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Navbar />} >
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
