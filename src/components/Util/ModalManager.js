import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import Login from "../forms/Login";
import Register from "../forms/Register";
import LoginRegister from "../forms/LoginRegister";
import Modal from "../layout/modal/Modal";

const ModalManager = () => {
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
    <Modal
      isOpen={isOpen}
      closeModalHandler={closeModalHandler}
      modalChildPosition={modalChildPosition}
      renderComponent={renderComponent}
    >
      {renderComponent}
    </Modal>
  );
};

export default ModalManager;
