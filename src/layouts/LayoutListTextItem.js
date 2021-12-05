import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
function LayoutListTextItem({ listContent }) {
  return (
    <>
      {listContent.map((l, index) => (
        <ListGroup.Item className="border-0 bg-dark" key={index}>
          <Nav.Item
            className="nav-link hover-layout  text-white text-capitalize"
            href="#Men"
          >
            {l}
          </Nav.Item>
        </ListGroup.Item>
      ))}
    </>
  );
}

export default LayoutListTextItem;
