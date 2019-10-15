import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../ProductsBackEnd/style.css';
import ProductCard from '../../components/ProductCard.js';

class ProductsBackEnd extends Component {
    state = {
        products: [],
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
        newProductName: '',
        newProductDescription: '',
        newProductCategory: '',
        newProductImgs: [],
        newProductPrice: 0.00,
        productID: '',
        currentProductId: '',
        beingEdited: false,
        accountCheck: false,
        hideLogin: false,
        usernameInput: '',
        usernamePass: ''
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
            price: parseFloat(this.state.newProductPrice)
        };

        API.addProduct(newProduct)
        .then(console.log(newProduct))
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

    editProductSetUp = (product) => {
            this.setState({
                beingEdited: true,
                currentProductId: product._id,
                newProductName: product.name,
                newProductDescription: product.description,
                newProductCategory: product.category,
                newProductImgs: product.imgLink.toString(),
                newProductPrice: parseFloat(product.price)
        });
    }

    submitEditedProduct = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        let newEditedProduct = {
            name: this.state.newProductName,
            description: this.state.newProductDescription,
            category: this.state.newProductCategory,
            imgLink: this.state.newProductImgs.split(',').map(function(string){ return string.trim(); }),
            price: parseFloat(this.state.newProductPrice)
        };

        API.updateProduct(this.state.currentProductId, newEditedProduct)
        .then(res => console.log(res))
        .then(() => {
            this.setState({
                beingEdited: false,
                currentProductId: '',
                newProductName: '',
                newProductDescription: '',
                newProductCategory: '',
                newProductImgs: '',
                newProductPrice: 0.00
            })
        })
        .then(this.loadProducts)
        .catch(err => console.log(err))
    }

    cancelEdit = () => {
        this.setState({
            beingEdited: false,
            currentProductId: '',
            newProductName: '',
            newProductDescription: '',
            newProductCategory: '',
            newProductImgs: '',
            newProductPrice: 0.00
        })
    }

    deleteProduct = (id) => {
        API.deleteProduct(id)
        .then(res => console.log(res))
        .then(this.loadProducts)
        .catch(err => console.log(err))
    }
    
    login = () => {
        if(this.state.usernameInput === this.state.username && this.state.usernamePass === this.state.password){
            this.setState({ accountCheck: true, hideLogin: true })
        }
    }

    render(){
        return(
            <div>
                {this.state.hideLogin ? (
                    <div>
                        {this.state.accountCheck ? (
                            <div className="container">
                            <div className="productCreate">
                                <label for="newProductName">Name:</label>
                                <input type="text" name="newProductName" value={this.state.newProductName} onChange={this.handleInput} className="productInputs"></input>
                                <label for="newProductCategory">Category:</label>
                                <select name="newProductCategory" value={this.state.newProductCategory} onChange={this.handleInput} className="productInputs">
                                    <option value="" selected disabled hidden>Choose Product Category</option>
                                    <option value="Andrology">Andrology</option>
                                    <option value="Microinjectors">Microinjectors</option>
                                    <option value="Incubators">Incubators</option>
                                    <option value="Centerfuges">Centerfuges</option>
                                </select>
                                <label for="newProductDescription">Description:</label>
                                <textarea  name="newProductDescription" value={this.state.newProductDescription}onChange={this.handleInput} className="productInputs"></textarea>
                                <label for="newProductImgs">Image URLs (comma separated list):</label>
                                <input type="text" name="newProductImgs" value={this.state.newProductImgs} onChange={this.handleInput} className="productInputs"></input>
                                <label for="newProductPrice">Price:</label>
                                <input type="text" name="newProductPrice" value={this.state.newProductPrice} onChange={this.handleInput} className="productInputs"></input>
                                {this.state.beingEdited ? (
                                    <div>
                                        <button onClick={this.submitEditedProduct}>Update Product</button>
                                        <button onClick={this.cancelEdit}>Cancel</button>
                                    </div>
                            ): (
                                <button onClick={this.createProduct}>Submit</button>
                            )}
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
                                            editButton = {() => this.editProductSetUp(product)}
                                            deleteButton = {() => this.deleteProduct(product._id)}
                                        />    
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    ):(
                        <h1>Sorry incorrect password or username</h1>
                    )}
                </div>
                ):(
                    <div>
                        <h3>Login:</h3><input type='text' name='usernameInput' value={this.state.usernameInput} onChange={this.handleInput}></input>
                        <h3>Password:</h3><input type='text' name='usernamePass' value={this.state.usernamePass} onChange={this.handleInput}></input>
                        <button onClick={this.login}>Login</button>
                    </div>
                )}
            </div>
        );
    }
}

export default ProductsBackEnd;