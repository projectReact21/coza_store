import React from "react";
import "font-awesome/css/font-awesome.css";
import { Card, Row, Button } from "react-bootstrap";
function ListProductItem({ name, price, status, srcImg }) {
  return (
    <Card className="overflow-hidden card__product--item">
      <div className="overflow-hidden">
        <Card.Img
          variant="top"
          className="card__product--item-img"
          src={srcImg}
        />
      </div>
      <Card.Body>
        <Card.Text className="position-absolute top-1 right-0 me-2">
          {" "}
          <i
            className="fa fa-heart fs-4 card__product--item-status  "
            style={
              parseInt(status) === 0 ? { color: "#eee" } : { color: "red" }
            }
          ></i>
        </Card.Text>
        <Card.Title className="text-overflow-1 pe-4">{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Row className="justify-content-center">
          <Button
            variant="primary"
            className="position-absolute card__product--item-btn mx-2 col-sm-4 col-md-6 "
          >
            Quick View
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ListProductItem;
