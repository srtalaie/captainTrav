import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const carouselCaptionStyle = {
    color: 'black',
    fontSize: '2vw'
}

const CarouselComponent = ({ imgLink1, imgLink2, imgLink3 }) => (
    <Carousel >
        <Carousel.Item>
            <img
            className="d-block w-100"
            src= {imgLink1}
            alt="First slide"
            />
            <Carousel.Caption style={carouselCaptionStyle}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={imgLink2}
            alt="Second slide"
            />
            <Carousel.Caption style={carouselCaptionStyle}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src={imgLink3}
            alt="Third slide"
            />
            <Carousel.Caption style={carouselCaptionStyle}>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);

export default CarouselComponent;