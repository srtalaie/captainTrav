import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../Categories/style.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Products from '../Products/Products.js';

class Categories extends Component {

    render(){
        return(
            <div>
                <Router>
                    <Link to="/products/Andrology">Andrology</Link>
                    <Switch>
                        <Route path='/products/*' component={Products} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Categories;