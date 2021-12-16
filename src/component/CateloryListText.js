import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ActionTypes from "../stores/action";
function CateloryListText({ listText, defaultActive, col, radius, typeFill }) {
  const dispatch = useDispatch();
  const handleFill = (c, t) => {
    dispatch({
      type: ActionTypes.SELECTED_MAIN_SHOP,
      selectedShop: c,
    });
  };
  return (
    <Nav
      defaultActiveKey={defaultActive}
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
            className="text-dark text-capitalize w-100 me-2 "
            name={typeFill}
            onClick={() => handleFill(l, typeFill)}
          >
            {l}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default CateloryListText;
