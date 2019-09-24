import React, { Component } from 'react';
import API from '../../utils/API.js';
import './style.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Products extends Component {
    
    state = {
        category: this.props.location.pathname.split('/')[2],
        products: []
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        API.getProductByCategory('Andrology')
        .then(res => this.setState({ products: res.data }))
        .catch(err => console.log(err))
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.category}</h1>
            </div>
        );
    }
}

export default Products;