import React, { Component } from 'react';
import API from '../../utils/API.js';
import './style.css';

class IndividualProduct extends Component {

    state = {
        product: {},
        id: this.props.location.pathname.split('/')[2]
    }
    
    componentDidMount(){
        this.loadProduct();
    }

    loadProduct = () => {
        API.getProduct(this.state.id)
        .then(res => this.setState({ product: res.data }))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <h1>Wassup</h1>
            </div>
        );
    }
}

export default IndividualProduct;