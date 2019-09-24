import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../Categories/style.css';

class Categories extends Component {

    render(){
        return(
            <div>
                <a href='/products/andrology'>Andrology</a>
            </div>
        );
    }
}

export default Categories;