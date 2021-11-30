import React from 'react';
import {Carousel,Button} from "react-bootstrap";
function CarouselItem({srcImg,title,description}) {
    return ( 
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={srcImg}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button>SHOP NOW</Button>
            </Carousel.Caption>
        </Carousel.Item>
     );
}

export default CarouselItem;