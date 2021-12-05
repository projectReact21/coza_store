import React from "react";
import { Card,Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
function CateloryItem({title,text,srcImg }) {
  return (
    <Col xs={12} md={6} lg={4}>
          <Card className="bg-dark text-white card__item">
            <Card.Img src={srcImg} className="card__item--img" />
                <Card.ImgOverlay>
                  <Card.Title className="card__item--title mt-4 ">{title}</Card.Title>
                  <Card.Text className="card__item--text">{text}</Card.Text>
                </Card.ImgOverlay>
                <Card className=" card__item--card bg-dark text-white position-absolute bottom-0 top-0 left-0 right-0 ">
                  <Card.ImgOverlay>
                  <Card.Title className="card__item--title mt-4 ">{title}</Card.Title>
                          <Card.Text className="card__item--text">{text}</Card.Text>
                    <Button className="card__item--btn border-0  text-uppercase  position-absolute bg-none">shop now</Button>
                  </Card.ImgOverlay>
              </Card>  
          </Card>
    </Col>
  );
}

export default CateloryItem;
