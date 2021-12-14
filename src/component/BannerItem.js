import React from "react";
import { Carousel, Button } from "react-bootstrap";

function BannerItem({ srcImg, title, description, alt }) {
  
  return (
    <>
      <img className="d-block w-100" src={srcImg} alt={alt} />
      <Carousel.Caption>
        <h3 className="banner__item--title">{title}</h3>
        <p className="banner__item--description">{description}</p>
        <Button className="banner__item--btn">shop now</Button>
      </Carousel.Caption>
    </>
  );
}

export default BannerItem;
