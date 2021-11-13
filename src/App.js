import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./features/Home";
import { Routes, Route } from "react-router-dom";
import Category from "./features/Category";
import ProductDetail from "./features/ProductDetail";
import Selling from "./features/Selling";
import Promotion from "./features/Promotion";
import Payment from "./features/Payment";
import Order from "./features/Order";
import Campaign from "./features/Campaign";
import Cart from "./features/Cart";
import Broadcast from "./features/Broadcast";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        {/* Header */}
        <Header />

        {/* Main */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/category" element={<Category />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/selling" element={<Selling />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/broadcast" element={<Broadcast />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
