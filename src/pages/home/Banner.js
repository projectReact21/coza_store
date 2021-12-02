import React from 'react';
import {Carousel,Button} from 'react-bootstrap'
import slide01 from  './imghome/slide-01.jpg'
import slide02 from  './imghome/slide-02.jpg'
import slide03 from  './imghome/slide-03.jpg'



function Banner() {
    return ( 
        <Carousel  >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {slide01}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Women Collection 2018</h3>
                <p>NEW SEASON</p>
                <Button>shop now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {slide02} 
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Men New-Season</h3>
                <p>New arrivals</p>
                <Button>shop now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {slide03} 
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Men Collection 2018</h3>
                <p>Jackets & Coats</p>
                <Button>shop now</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
     );
}

export default Banner;