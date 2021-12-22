import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../stores/action";

function CateloryListText({ listText, names, col, radius, typeFill }) {
  const selectedShop = useSelector((state) => state.auth.selectedShop);
  const dispatch = useDispatch();
  const handleFill = (typeFill, name) => {
    if (typeFill === "theme") {
      dispatch({
        type: ActionTypes.SELECTED_MAIN_SHOP,
        selectedShop: name,
      });
    } else {
      dispatch({
        type: ActionTypes.SELECTED_FILTER_SHOP,
        typeFill: 1,
        selectedFillShop: name,
      });
    }
  };
  return (
    <Nav
      as="ul"
      className={
        col || radius
          ? "col-sm-12 col-md-8 w-100 mb-2"
          : "col-sm-12 col-md-8 mb-2"
      }
    >
      {listText.map((l, index) => (
        <Nav.Item
          as="li"
          key={index}
          style={radius ? { margin: ".25rem" } : {}}
          className={col ? col : ""}
        >
          <Nav.Link
            eventKey={l}
            style={
              radius
                ? {
                    borderRadius: radius,
                    border: "solid 1px black",
                  }
                : {}
            }
            className={
              names
                ? selectedShop === names[index]
                  ? "text-dark text-capitalize w-100 me-2 active "
                  : "text-dark text-capitalize w-100 me-2 "
                : ""
            }
            name={names ? names[index] : ""}
            onClick={() => handleFill(typeFill, names[index])}
          >
            {l}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default CateloryListText;
