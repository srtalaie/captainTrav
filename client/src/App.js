import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsBackEnd from './pages/ProductsBackEnd/ProductsBackEnd.js';
import Home from './pages/Home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="homeContainer">
      {/* <Home /> */}
      <ProductsBackEnd />
    </div>
  );
}

export default App;
