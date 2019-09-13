import React, { Component } from 'react';
import API from '../../utils/API.js';

class Products extends Component {
    state = {
        products: [],
        username: 'root',
        password: 'admin',
        newProductName: '',
        newProductDescription: '',
        newProductImgs: [],
        newProductPrice: 0.00
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = () => {
        API.getProduct()
        .then(res => this.setState({ products: res.data }))
        .catch(err => console.log(err))
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    createProduct = () => {
        let newProduct = {
            name: this.state.newProductName,
            description: this.state.newProductDescription,
            imgLink: this.state.newProductImgs,
            price: this.state.newProductPrice
        };

        API.addProduct(newProduct)
        .then(res => this.setState({ products: this.state.products.concat(res.data) }))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <h1>Sup</h1>
            </div>
        );
    }
}

export default Products;