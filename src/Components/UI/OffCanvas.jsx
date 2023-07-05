import React, { Fragment } from "react";
import ReactDOM from "react";
import "../UI/OffCanvas.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.OnClose}></div>;
};

const OffCanvasOverlay = (props) => {
  return (
    <div className="offcanvas">
      <div className="content">{props.children}</div>
    </div>
  );
};
const OffCanvas = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.OnClise} />
      <OffCanvasOverlay > {props.children}
      </OffCanvasOverlay >
    </Fragment>
  );
};

export default OffCanvas;
