import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductsBackEnd from './pages/ProductsBackEnd/ProductsBackEnd.js';
import Home from './pages/Home/Home.js';
import Categories from './pages/Categories/Categories.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products.js';

function App() {
  return (
    
    <div>
        <Router>
          <Link to="/categories">Categories</Link>
          
          <Switch>
              <Route path='/categories/' component={Categories} />
              <Route path='/products/*' component={Products} />
          </Switch>
        </Router>
      <div className="homeContainer">
      </div>
    </div>
  );
}

export default App;
