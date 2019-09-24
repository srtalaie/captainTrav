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
        API.getProductByCategory(this.state.category)
        .then(res => this.setState({ products: res.data }))
        .catch(err => console.log(err))
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.category}</h1>
                    {this.state.products.length ? (
                        <div className="productsContainer">
                            {this.state.products.map(product => {
                                return(
                                    <div className="individualProduct">
                                        <img src={product.imgLink[1]} alt="product"></img>
                                        <p><span className="productName">{product.name}</span> - ${product.price}</p>
                                        <p>{product.description}</p>
                                        <a href={`/product/${product._id}`}>View Product</a>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <h3>Loading {this.state.category} Products...</h3>
                    )}          
            </div>
        );
    }
}

export default Products;