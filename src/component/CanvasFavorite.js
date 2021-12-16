import React from "react";
import { Offcanvas, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ActionTypes from "./../stores/action";
function CanvasFavorite({ content }) {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.auth.isShowCanvasFavorite);
  const productLike = useSelector((state) => state.auth.productLike);
  const handleClose = () => {
    dispatch({
      type: ActionTypes.HIDEN_CANVAS_FAVORITE,
    });
  };
  return (
    <>
      <Offcanvas
        style={{ width: "300px" }}
        placement="end"
        name="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton className=" bg-primary">
          <Offcanvas.Title className="text-capitalize text-white">
            {content}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {productLike?.map((p) => (
            <Card
              style={{ width: "18rem" }}
              className="flex-row border-0 mb-2 hover-layout "
              key={p.id}
            >
              <Card.Img
                variant="top"
                style={{ width: "5rem", height: "4rem" }}
                src={p.srcImg}
              />
              <Card.Body className="flex-row justify-content-around  ">
                <Card.Text style={{ width: "80%" }}>{p.name}</Card.Text>
                <Card.Text>
                  <i
                    className="fa fa-times"
                    title="unlike"
                    aria-hidden="true"
                  ></i>{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CanvasFavorite;
