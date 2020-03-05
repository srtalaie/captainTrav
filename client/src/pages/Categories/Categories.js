import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../Categories/style.css';

class Categories extends Component {

    render(){
        return(
            <div className="categoriesContainer">
                <div className="categoryLink">
                    <a href='/products/Andrology'><img src={process.env.PUBLIC_URL + '/assets/images/product_cat/Androfuge.png'} alt="category"></img></a>
                    <p>Andrology</p>
                </div>
                <div className="categoryLink">
                    <a href='/products/Microinjectors'><img src={process.env.PUBLIC_URL + '/assets/images/product_cat/microinjector.png'} alt="category"></img></a>
                    <p>Microinjectors</p>
                </div>
                <div className="categoryLink">
                    <a href='/products/Incubators'><img src={process.env.PUBLIC_URL + '/assets/images/product_cat/incubator.png'} alt="category"></img></a>
                    <p>Incubators</p>
                </div>
                <div className="categoryLink">
                    <a href='/products/Centrifuges'><img src={process.env.PUBLIC_URL + '/assets/images/product_cat/centrifuge.png'} alt="category"></img></a>
                    <p>Centrifuges</p>
                </div>
            </div>
        );
    }
}

export default Categories;