import React, { Component } from 'react';
import API from '../../utils/API.js';
import './style.css';

class IndividualProduct extends Component {

    state = {
        product: [],
        id: this.props.location.pathname.split('/')[2],
        name: '',
        imgLink: [],
        price: 0,
        description: '',
        viewedImg: ''
    }
    
    componentDidMount(){
        this.loadProduct();
    }

    loadProduct = () => {
        API.getProduct(this.state.id)
        .then(res => this.setState({ product: res.data, name: res.data[0].name, imgLink: res.data[0].imgLink, price: res.data[0].price, description: res.data[0].description, viewedImg: res.data[0].imgLink[0] }))
        .catch(err => console.log(err))
    }

    imgChanger = (event) => {
        const { src } = event.target;
        this.setState({ viewedImg: src });
    }

    render(){
        return(
            <div>
                <div className="indProductContainer">
                    <div className="indProductImgs">
                        <img className="indProductFirstImg" src={this.state.viewedImg} alt="product"></img>
                        <div className="indProductImgRow">
                            {this.state.imgLink.map(img => {
                                return <img src={img} alt="product-thumb" className="indProductImgThumb" value={img} onClick={this.imgChanger}></img>
                            })}
                        </div>
                    </div>
                    <div className="indProductInfo">
                        <h1 className="indProductName">{this.state.name}</h1>
                        <h4>${this.state.price}</h4>
                        <h6>{this.state.description}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndividualProduct;