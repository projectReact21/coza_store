import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../../stores/action";
import productService from "../../../services/productService";

function MainHomeListText({ listText, col, names, center }) {
  const dispatch = useDispatch();
  const dataFill = (data) => {
    dispatch({
      type: ActionTypes.FIND_DATA_HOME,
      productHome: data,
    });
  };
  const selected = useSelector((state) => state.auth.selectedHome);
  const handleFill = (c, t) => {
    dispatch({
      type: ActionTypes.SELECTED_MAIN_HOME,
      selectedHome: t,
    });
    productService.getFillProduct(t).then((res) => dataFill(res.data.data));
  };
  return (
    <Nav
      as="ul"
      className={
        col ? "col-sm-12 col-md-8 w-100 mb-2" : "col-sm-12 col-md-8 mb-2"
      }
    >
      {listText.map((l, index) => (
        <Nav.Item as="li" key={index} className={col ? col : ""}>
          <Nav.Link
            className={
              selected === names[index]
                ? "text-dark text-capitalize w-100 me-2 active"
                : "text-dark text-capitalize w-100 me-2 "
            }
            name={names[index]}
            onClick={() => handleFill(l, names[index])}
          >
            {l}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default MainHomeListText;
