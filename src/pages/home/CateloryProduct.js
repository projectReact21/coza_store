<<<<<<< HEAD
import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import banner1 from "./imghome/banner-01.jpg";
import banner2 from "./imghome/banner-02.jpg";
import banner3 from "./imghome/banner-03.jpg";
import Interface from "./Interface";
function CateloryProduct() {
  return (
    <Container fluid className="pt-5 pb-5">
      <Row>
        <Col xs={12} md={6}>
          <Card className="bg-dark text-white card__item">
            <Card.Img src={banner1} className="card__item--img" />
            <Card.ImgOverlay>
              <Card.Title className="card__item--title mt-4 ">women</Card.Title>
              <Card.Text className="card__item--text">spring 2018</Card.Text>
            </Card.ImgOverlay>
            <Interface content="shop now" />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="bg-dark text-white card__item">
            <Card.Img src={banner2} />
            <Card.ImgOverlay>
              <Card.Title className="card__item--title  mt-4 ">men</Card.Title>
              <Card.Text className="card__item--text">spring 2018</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} sm={6}>
          <Card className="bg-dark text-white  card__item">
            <Card.Img src={banner3} />
            <Card.ImgOverlay>
              <Card.Title className="card__item--title mt-4 ">
                Accessories
              </Card.Title>
              <Card.Text className="card__item--text">new trend</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CateloryProduct;
=======
import React from 'react';
import { Col, Container, Row,Card } from 'react-bootstrap';
import banner1 from './imghome/banner-01.jpg'
import banner2 from './imghome/banner-02.jpg'
import banner3 from './imghome/banner-03.jpg'
import Interface from './Interface';
function CateloryProduct() {
    return ( 
        <Container fluid className="pt-5 pb-5" >
            <Row>
                
                <Col xs={12} md={6}>
                    <Card className="bg-dark text-white card__item">
                        <Card.Img src={banner1} className="card__item--img" />
                        <Card.ImgOverlay>
                            <Card.Title className="card__item--title mt-4 " >women</Card.Title>
                            <Card.Text className="card__item--text" >spring 2018</Card.Text>
                        </Card.ImgOverlay>
                        <Interface content="shop now"/>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card className="bg-dark text-white card__item">
                        <Card.Img src={banner2} />
                        <Card.ImgOverlay>
                            <Card.Title className="card__item--title  mt-4 " >men</Card.Title>
                            <Card.Text  className="card__item--text" >spring 2018</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
               
            </Row>
            <Row className="justify-content-center mt-4">
                <Col xs={12} sm={6} >
                    <Card className="bg-dark text-white  card__item">
                        <Card.Img src={banner3} />
                        <Card.ImgOverlay>
                            <Card.Title className="card__item--title mt-4 " >Accessories</Card.Title>
                            <Card.Text  className="card__item--text" >new trend</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
     );
}

export default CateloryProduct;
>>>>>>> c3d78f0019f021b708761f0ffd1fc1f854efa00a
