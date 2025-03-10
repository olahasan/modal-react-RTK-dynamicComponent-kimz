<!-- //modal before seperate
import React, { Fragment } from "react";
import CloseSVG from "../../../assets/close.svg";

import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modaSlice";
import Login from "./../../forms/Login";
import Register from "./../../forms/Register";
import LoginRegister from "./../../forms/LoginRegister";

const Modal = () => {
  const { isOpen, componentName, modalChildPosition, childrenProps } =
    useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const closeModalHandler = () => dispatch(closeModal());

  //old way

  // const componentHandler = () => {
  //   if (componentName === "login") {
  //     return <Login />;
  //   } else if (componentName === "register") {
  //     return <Register />;
  //   } else if (componentName === "loginRegister") {
  //     return <LoginRegister />;
  //   }
  // };

  // dynamic components

  const componentsLookUp = {
    login: Login,
    register: Register,
    loginRegister: LoginRegister,
  };

  let renderComponent;
  let SelectedComponent = componentsLookUp[componentName];
  if (componentName) {
    renderComponent = <SelectedComponent {...childrenProps} />;
  }

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

export default Modal; -->
