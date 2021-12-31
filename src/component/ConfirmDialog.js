import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmDialog = (props) => {
  const { title, content, dataId, yesTitle, noTitle } = props.options;
  const handleClose = () => {
    props.onConfirm(false);
  };
  const handleOk = () => {
    props.onConfirm(dataId);
  };
  return (
    <Modal
      show={props.options.show}
      onHide={handleClose}
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title ? title : "Xác Nhận?"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="secondary" onClick={handleClose}>
          {noTitle ? noTitle : "Không"}
        </Button>
        <Button variant="primary" onClick={handleOk}>
          {yesTitle ? yesTitle : "Có"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDialog;
