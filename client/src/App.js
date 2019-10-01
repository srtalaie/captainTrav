import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductsBackEnd from './pages/ProductsBackEnd/ProductsBackEnd.js';
import Home from './pages/Home/Home.js';
import Categories from './pages/Categories/Categories.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products.js';
import IndividualProduct from './pages/IndividualProduct/IndividualProduct.js';

function App() {
  return (
    
    <div>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/admin">Admin</Link>
          <Switch>
              <Route exact path='/admin' component={ProductsBackEnd} />
              <Route path='/categories/' component={Categories} />
              <Route path='/products/*' component={Products} />
              <Route path='/product/*' component={IndividualProduct} />
              <Route exact path='' component={Home} />
          </Switch>
        </Router>
      <div className="homeContainer">
      </div>
    </div>
  );
}

export default App;
