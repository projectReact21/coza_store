import React from "react";
import "font-awesome/css/font-awesome.css";
import { Card, Row, Button } from "react-bootstrap";
function ListProductItem({ name, price, status }) {
  console.log(status);
  return (
    <Card className="overflow-hidden card__product--item">
      <div className="overflow-hidden">
        <Card.Img
          variant="top"
          className="card__product--item-img"
          src="https://github.com/projectReact21/coza_store/blob/main/src/resoures/img/product-01.jpg?raw=true"
        />
      </div>
      <Card.Body>
        <Card.Text className="position-absolute top-1 right-0 me-2">
          {" "}
          <i
            class="fa fa-heart fs-4 card__product--item-status"
            style={
              parseInt(status) === 0 ? { color: "#eee" } : { color: "red" }
            }
          ></i>
        </Card.Text>
        <Card.Title>{name}</Card.Title>
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
