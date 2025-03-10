import React, { Fragment } from "react";
import CloseSVG from "../../../assets/close.svg";
import "./modal.css";

const Modal = ({
  isOpen,
  closeModalHandler,
  modalChildPosition,
  renderComponent,
  children,
}) => {
  return (
    <Fragment>
      <div
        className={`modal-backDrop ${isOpen ? "modal-show" : "modal-hide"}`}
        onClick={closeModalHandler}
      ></div>
      <div
        className={`modal-container ${isOpen ? "modal-show" : "modal-hide"}`}
      >
        <div className="modal-close">
          <img
            src={CloseSVG}
            className="modal-close-img"
            alt="close-modal"
            onClick={closeModalHandler}
          />
        </div>
        {/* <div className="modal-content">{componentHandler()}</div> */}
        <div className={`modal-content ${modalChildPosition}`}>
          {renderComponent}
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
