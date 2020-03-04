import React, { Component } from 'react';
import CarouselComponent from '../../components/Carousel/Carousel.js';
import CarouselBottom from '../../components/CarouselBottom/CarouselBottom.js'
import '../Home/style.css';
import PreviousClients from '../../components/PreviousClients/PreviousClients.js';
import Testimonials from '../../components/Testimonials/Testimonials.js';

class Home extends Component {
    
    render(){
        return(
            <div>
                <CarouselComponent 
                    imgLink1 = {'http://skyworld.com/wp-content/uploads/2015/09/SkyWorld-Hero-img-v2-1.jpg'}
                    imgLink2 = {'http://skyworld.com/wp-content/uploads/2015/09/SkyWorld-Hero-img-v2-1.jpg'}
                    imgLink3 = {'http://skyworld.com/wp-content/uploads/2015/09/SkyWorld-Hero-img-v2-1.jpg'}
                />

                <div className="homePageContainer">
                    <PreviousClients
                        imgLink1 = {process.env.PUBLIC_URL + '/assets/images/testimonials/usc.png'}
                        imgLink2 = {process.env.PUBLIC_URL + '/assets/images/testimonials/quest.png'}
                        imgLink3 = {process.env.PUBLIC_URL + '/assets/images/testimonials/cal.png'}
                        imgLink4 = {process.env.PUBLIC_URL + '/assets/images/testimonials/sdsu.png'}
                        imgLink5 = {process.env.PUBLIC_URL + '/assets/images/testimonials/genomic.png'}
                        imgLink6 = {process.env.PUBLIC_URL + '/assets/images/testimonials/cgh.png'}
                        imgLink7 = {process.env.PUBLIC_URL + '/assets/images/testimonials/23me.png'}
                        imgLink8 = {process.env.PUBLIC_URL + '/assets/images/testimonials/ucsd.png'}
                    />

                    <Testimonials />
                    
                    
                    <CarouselBottom 
                        imgLink1 = {'http://skyworld.com/wp-content/uploads/2015/09/SkyWorld-Hero-img-v2-1.jpg'}
                        imgLink2 = {'http://skyworld.com/wp-content/uploads/2015/09/SkyWorld-Hero-img-v2-1.jpg'}
                        imgLink3 = {'http://skyworld.com/wp-content/uploads/2015/09/SkyWorld-Hero-img-v2-1.jpg'}
                    />
                </div>
            </div>
        );
    }
}

export default Home;