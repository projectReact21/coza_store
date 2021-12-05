import React from "react";
import { Nav } from "react-bootstrap";
function CateloryListText({ listText, defaultActive, col, radius, col2 }) {
  console.log(defaultActive);
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
            className={
              col2 ? col2 : "text-dark stext-107 c16 text-capitalize w-100 me-2"
            }
          >
            {l}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default CateloryListText;
