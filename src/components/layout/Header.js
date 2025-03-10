import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <ul className="header-right">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
      </ul>
      <ul className="header-left">
        <li
          onClick={() =>
            dispatch(
              openModal({
                name: "login",
                childrenProps: { name: "ola ali", email: "ola@gmail.com" },
              })
            )
          }
        >
          Login
        </li>
        <li
          onClick={() =>
            dispatch(openModal({ name: "register", position: "bottom" }))
          }
        >
          Register
        </li>
      </ul>
    </div>
  );
};

export default Header;
