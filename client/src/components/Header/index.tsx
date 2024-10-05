import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/paths";

const Header = () => {
  const user = false;
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div className="Header_logo" onClick={() => navigate(PATH.HOME)}>
        <h2>Chat App</h2>
      </div>
      <div className="Header_right">
        {user ? (
          <div className="Header_right_info">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
        ) : (
          <div className="Header_right_auth">
            <button onClick={() => navigate(PATH.LOGIN)}>Login</button>
            <button onClick={() => navigate(PATH.REGISTER)}>Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
