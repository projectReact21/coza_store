import React from "react";
import "font-awesome/css/font-awesome.css";
import { Card, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../stores/action";
import mycartService from "../services/mycartService";
function ListProductItem({
  productItem,
  addToCart,
  name,
  price,
  status,
  srcImg,
}) {
  return (
    <Card className="overflow-hidden card__product--item">
      <div className="overflow-hidden">
        <Card.Img
          variant="top"
          className="card__product--item-img"
          src={productItem.srcImg}
        />
      </div>
      <Card.Body>
        <Card.Text className="position-absolute top-1 right-0 me-2">
          {" "}
          <i
            className="fa fa-heart fs-4 card__product--item-status  "
            style={
              parseInt(productItem.status) === 0
                ? { color: "#eee" }
                : { color: "red" }
            }
          ></i>
        </Card.Text>
        <Card.Title className="text-overflow-1 pe-4">
          {productItem.name}
        </Card.Title>
        <Card.Text>{"$ " + productItem.price}</Card.Text>
        <Row className="justify-content-center">
          <Button
            variant="primary"
            className="position-absolute card__product--item-btn mx-2 col-sm-4 col-md-6 "
            onClick={addToCart(productItem)}
            disabled={productItem.quanity === 0}
          >
            Buy
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ListProductItem;
