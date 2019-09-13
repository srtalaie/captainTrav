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
        API.getProducts()
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
            imgLink: this.state.newProductImgs.split(',').map(function(string){ return string.trim(); }),
            price: this.state.newProductPrice
        };

        API.addProduct(newProduct)
        .then(res => this.setState({ products: this.state.products.concat(res.data) }))
        .then(() => {
            this.setState({
                newProductName: '',
                newProductDescription: '',
                newProductImgs: '',
                newProductPrice: 0.00
            })
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="productCreate">
                        <input type="text" name="newProductName" value={this.state.newProductName} onChange={this.handleInput}></input>
                        <input type="textarea" name="newProductDescription" value={this.state.newProductDescription}onChange={this.handleInput}></input>
                        <input type="text" name="newProductImgs" value={this.state.newProductImgs} onChange={this.handleInput}></input>
                        <input type="text" name="newProductPrice" value={this.state.newProductPrice} onChange={this.handleInput}></input>
                        <button onClick={this.createProduct}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;