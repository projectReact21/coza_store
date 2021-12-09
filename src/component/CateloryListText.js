import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../stores/action";
import productService from "../services/productService"
function CateloryListText({ listText, defaultActive, col, radius, typeFill }) {
  const dispatch = useDispatch();
  const dataFill = (data) => {
    dispatch({
      type: ActionTypes.FIND_DATA,
      productFill: data,
    });
  };
  const dataAPI = useSelector((state) => state.auth.allproducts);
  const handleFill = (c, t) => {
    console.log(c);
    if(c==='allproducts'){
      dataFill(dataAPI)
    }else{
       productService.getFillProduct(c).then(res=>{
          dataFill(res.data.data)
      })  
    }
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
