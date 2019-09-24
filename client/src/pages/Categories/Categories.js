import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../Categories/style.css';

class Categories extends Component {

    render(){
        return(
            <div>
                <a href='/products/Andrology'>Andrology</a>
                <a href='/products/Microinjectors'>Microinjectors</a>
                <a href='/products/Incubators'>Incubators</a>
                <a href='/products/Centerfuges'>Centerfuges</a>
            </div>
        );
    }
}

export default Categories;