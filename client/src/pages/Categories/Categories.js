import React, { Component } from 'react';
import API from '../../utils/API.js';
import '../Categories/style.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class ProductsBackEnd extends Component {
   

    render(){
        return(
            <div>
                <Router>
                    <ul>
                        <li><Link to='/andrology/'>Andrology</Link></li>
                        <li><Link to='/microinjectors/'>Microinjectors</Link></li>
                        <li><Link to='/incubators/'>Incubators</Link></li>
                        <li><Link to='/centerfuges/'>Centerfuges</Link></li>
                    </ul>
                    <Switch>
                        <Route path='/andrology/' component={AndrologyProducts} />
                        <Route path='/microinjectors/' component={MicroinjectorProducts} />
                        <Route path='/incubators/' component={IncubatorProducts} />
                        <Route path='/centerfuges/' component={CenterfugeProducts} />
                    </Switch>
                </Router>  
            </div>
        );
    }
}

export default ProductsBackEnd;