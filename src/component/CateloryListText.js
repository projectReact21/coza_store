import React from "react";
import { Nav } from "react-bootstrap";
function CateloryListText({ listText, defaultActive, col, radius }) {
  console.log(defaultActive);
  return (
    <Nav
      defaultActiveKey={defaultActive}
      as="ul"
      className={col || radius ? "col-8 w-100" : "col-8"}
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
            className="text-dark text-capitalize w-100 me-2"
          >
            {l}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default CateloryListText;
