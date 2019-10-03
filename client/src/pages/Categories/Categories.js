import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../Categories/style.css';

class Categories extends Component {

    render(){
        return(
            <div className="categoriesContainer">
                <div className="categoryLink">
                    <a href='/products/Andrology'><img src="https://media.springernature.com/lw450/springer-cms/rest/v1/content/16129430/data/v1" alt="category"></img></a>
                </div>
                <div className="categoryLink">
                    <a href='/products/Microinjectors'><img src="https://media.springernature.com/lw450/springer-cms/rest/v1/content/16129430/data/v1" alt="category"></img></a>
                </div>
                <div className="categoryLink">
                    <a href='/products/Incubators'><img src="https://media.springernature.com/lw450/springer-cms/rest/v1/content/16129430/data/v1" alt="category"></img></a>
                </div>
                <div className="categoryLink">
                    <a href='/products/Centerfuges'><img src="https://media.springernature.com/lw450/springer-cms/rest/v1/content/16129430/data/v1" alt="category"></img></a>
                </div>
            </div>
        );
    }
}

export default Categories;