import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Metode from './pages/Metode';
import Bayar from './pages/Bayar';
import UbahMetode from './pages/UbahMetode';
import Selesai from './pages/Selesai';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/metode" element={<Metode />} />
        <Route path="/bayar" element={<Bayar />} />
        <Route path="/ubah-metode" element={<UbahMetode />} />
        <Route path="/selesai" element={<Selesai />} />
      </Routes>
    </Router>
  );
}

export default App;