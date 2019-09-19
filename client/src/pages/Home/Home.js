import React, { Component } from 'react';
import CarouselComponent from '../../components/Carousel/Carousel.js';
import '../Home/style.css';

class Home extends Component {
    
    render(){
        return(
            <div>
                <CarouselComponent 
                    imgLink1 = {'https://cdn.levenhuk.com/images/products/large/0/LVH-microscopes-Rainbow-50L.jpg'}
                    imgLink2 = {'https://cdn.levenhuk.com/images/products/large/0/LVH-microscopes-Rainbow-50L.jpg'}
                    imgLink3 = {'https://cdn.levenhuk.com/images/products/large/0/LVH-microscopes-Rainbow-50L.jpg'}
                />

                <div className="container">
                    <div className="previousClients">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;