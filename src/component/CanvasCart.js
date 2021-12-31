import React, { useEffect, useState } from "react";
import { Offcanvas, Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import mycartService from "../services/mycartService";
import ActionTypes from "./../stores/action";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function CanvasCart({ content }) {
  const dispatch = useDispatch();
  const allmycarts = useSelector((state) => state.auth.allmycarts);
  const show = useSelector((state) => state.auth.isShowCanvasCart);
  const user = useSelector((state) => state.auth.dataUser);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch({
      type: ActionTypes.HIDEN_CANVAS_CART,
    });
  };
  useEffect(() => {
    setTotal(0);
    allmycarts.forEach((a) =>
      setTotal((total) => (total += parseInt(a.total)))
    );
  }, [allmycarts]);
  const handleDeleteProduct = (p) => {
    mycartService.delete(p.id).then((res) => {
      if (res.data.errorCode === 0) {
        mycartService.getListId(user.userId).then((res) => {
          dispatch({
            type: ActionTypes.LOAD_MY_CARTS,
            allmycarts: res.data.data,
          });
        });
        toast.success(`đã xóa thành công ${p.name} ra khỏi giỏ hàng`);
      } else toast.warning(res.data.errorMessage);
    });
  };
  const handleViewCart = (e) => {
    dispatch({
      type: ActionTypes.HIDEN_CANVAS_CART,
    });
    navigate("/feature");
  };
  return (
    <>
      <Offcanvas placement="end" name="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className=" bg-custom">
          <Offcanvas.Title className="text-capitalize text-white">
            {content}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {allmycarts?.map((p) => (
            <Card
              style={{ width: "100%" }}
              className="flex-row border-0 mb-2 hover-layout "
              key={p.id}
            >
              <Card.Img
                variant="top"
                style={{ width: "5rem", height: "4rem" }}
                src={p.srcImg}
              />
              <Card.Body className="flex-row justify-content-around mx-2 ">
                <Col>
                  <Card.Text as={Row} className="mb-1" style={{ width: "80%" }}>
                    {p.name}
                  </Card.Text>
                  <Row>
                    <Col xs="auto" className="pe-0">
                      x{p.quantity}
                    </Col>
                    <Col>$ {p.total}</Col>
                  </Row>
                </Col>
                <Card.Text>
                  <i
                    className="fa fa-times"
                    title="unlike"
                    aria-hidden="true"
                    onClick={() => handleDeleteProduct(p)}
                  ></i>{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Offcanvas.Body>
        <Row className="mx-4 fs-4" style={{ height: "200px" }}>
          <strong className="text-uppercase mt-4" style={{ fontWeight: "800" }}>
            total : ${total}
          </strong>
          <Col xs="12">
            <Row className="justify-content-center">
              <Col className="text-center ">
                <Button
                  className="text-uppercase w-100 rounded-pill"
                  style={{ height: "4rem", fontWeight: "600" }}
                  variant="dark"
                  onClick={handleViewCart}
                >
                  Giỏ Hàng
                </Button>
              </Col>
              {/* <Col className="text-center ">
                <Button
                  className="text-uppercase  w-100 rounded-pill"
                  style={{ height: "4rem", fontWeight: "600" }}
                  variant="dark"
                >
                  check out
                </Button>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Offcanvas>
    </>
  );
}

export default CanvasCart;
