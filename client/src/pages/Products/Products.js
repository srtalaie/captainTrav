import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../Products/style.css';
import ProductCard from '../../components/ProductCard.js';

class Products extends Component {
    state = {
        products: [],
        username: 'root',
        password: 'admin',
        newProductName: '',
        newProductDescription: '',
        newProductCategory: '',
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
            category: this.state.newProductCategory,
            imgLink: this.state.newProductImgs.split(',').map(function(string){ return string.trim(); }),
            price: this.state.newProductPrice
        };

        API.addProduct(newProduct)
        .then(res => this.setState({ products: this.state.products.concat(res.data) }))
        .then(() => {
            this.setState({
                newProductName: '',
                newProductDescription: '',
                newProductCategory: '',
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
                        <label for="newProductName">Name</label>
                        <input type="text" name="newProductName" value={this.state.newProductName} onChange={this.handleInput} className="productInputs"></input>
                        <label for="newProductCategory">Category</label>
                        <input type="text" name="newProductCategory" value={this.state.newProductCategory} onChange={this.handleInput} className="productInputs"></input>
                        <label for="newProductDescription">Description</label>
                        <textarea  name="newProductDescription" value={this.state.newProductDescription}onChange={this.handleInput} className="productInputs"></textarea>
                        <label for="newProductImgs">Image URLs (comma separated list)</label>
                        <input type="text" name="newProductImgs" value={this.state.newProductImgs} onChange={this.handleInput} className="productInputs"></input>
                        <label for="newProductPrice">Price</label>
                        <input type="text" name="newProductPrice" value={this.state.newProductPrice} onChange={this.handleInput} className="productInputs"></input>
                        <button onClick={this.createProduct}>Submit</button>
                    </div>

                    <table className="productTable">
                        <thead>
                            <tr>
                                <td>Product Name</td>
                                <td>Product Description</td>
                                <td>Product Category</td>
                                <td>Product Images</td>
                                <td>Product Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map(product => {
                                return(
                                    <ProductCard
                                        id = {product._id}
                                        name = {product.name}
                                        description = {product.description}
                                        category = {product.category}
                                        imgLinks = {product.imgLink}
                                        price = {product.price}
                                    />    
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Products;