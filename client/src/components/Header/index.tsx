import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/paths";
import { authApi } from "../../apis";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:8000/api/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "true",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Header">
      <div className="Header_logo" onClick={() => navigate(PATH.HOME)}>
        <h2>Chat App</h2>
      </div>
      <div className="Header_right">
        {user ? (
          <div className="Header_right_info">
            <img src="https://via.placeholder.com/150" alt="" />
            <button onClick={() => handleLogout()}>
              <i className="fa-regular fa-right-from-bracket"></i>
            </button>
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
