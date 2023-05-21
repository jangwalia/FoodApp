import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Backdrop(props) {
  return <div onClick={props.onClick} className="backdrop"></div>;
}

function ModalOverlay(props) {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
}

const portalDestination = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.handleClose} />,
        portalDestination
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalDestination
      )}
    </Fragment>
  );
}

export default Modal;
