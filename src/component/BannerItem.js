import React from "react";
import {Carousel,Button} from "react-bootstrap";

function BannerItem({srcImg,title,description,alt}) {
  console.log(typeof srcImg)
  return (
    <>
      <img className="d-block w-100" src={srcImg} alt={alt} />
      <Carousel.Caption>
        <h3 classname="banner__item--title">{title}</h3>
        <p classname="banner__item--description" >{description}</p>
        <Button classname="banner__item--btn" >shop now</Button>
      </Carousel.Caption>
      </>
  );
}

export default BannerItem;
