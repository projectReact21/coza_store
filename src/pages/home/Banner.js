import React from "react";
import { Carousel } from "react-bootstrap";
import BannerItem from "./../../component/BannerItem";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item fade="true">
        <BannerItem
          srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/slide-01.jpg?raw=true"
          title="Women Collection 2018"
          description="NEW SEASON"
          alt="Women Collection 2018"
        />
      </Carousel.Item>
      <Carousel.Item>
        <BannerItem
          srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/slide-02.jpg?raw=true"
          title="Men Collection 2018"
          description="Jackets & Coats"
          alt="Women Collection 2018"
        />
      </Carousel.Item>
      <Carousel.Item>
        <BannerItem
          srcImg="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/slide-03.jpg?raw=true"
          title="Men Collection 2018"
          description="NEW SEASON"
          alt="Men Collection 2018"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
