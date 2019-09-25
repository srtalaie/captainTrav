import React, { Component } from 'react';
import CarouselComponent from '../../components/Carousel/Carousel.js';
import CarouselBottom from '../../components/CarouselBottom/CarouselBottom.js'
import '../Home/style.css';
import PreviousClients from '../../components/PreviousClients/PreviousClients.js';
import Testimonials from '../../components/Testimonials/Testimonials.js'

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
                        imgLink1 = {'https://i.pinimg.com/236x/9d/0e/95/9d0e959cea5f993eaa560e275da7893b--harvard-college-harvard-university.jpg'}
                        imgLink2 = {'https://i.pinimg.com/236x/9d/0e/95/9d0e959cea5f993eaa560e275da7893b--harvard-college-harvard-university.jpg'}
                        imgLink3 = {'https://i.pinimg.com/236x/9d/0e/95/9d0e959cea5f993eaa560e275da7893b--harvard-college-harvard-university.jpg'}
                        imgLink4 = {'https://i.pinimg.com/236x/9d/0e/95/9d0e959cea5f993eaa560e275da7893b--harvard-college-harvard-university.jpg'}
                        imgLink5 = {'https://i.pinimg.com/236x/9d/0e/95/9d0e959cea5f993eaa560e275da7893b--harvard-college-harvard-university.jpg'}
                    />

                    <Testimonials
                        imgLink1 = {'http://skyworld.com/wp-content/uploads/2015/09/SkyWorld-Hero-img-v2-1.jpg'}
                        imgLink2 = {'http://skyworld.com/wp-content/uploads/2015/09/SkyWorld-Hero-img-v2-1.jpg'}
                        imgLink3 = {'http://skyworld.com/wp-content/uploads/2015/09/SkyWorld-Hero-img-v2-1.jpg'}
                    />
                    
                    
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