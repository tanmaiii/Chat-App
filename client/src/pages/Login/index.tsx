import React from "react";
import "./style.scss";
import { authApi } from "../../apis";

const Login = () => {
  const handleLoginWithGoogle = async () => {
    try {
      const res = await authApi.loginWithGoogle();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Login">
      <div className="Login_header">
        <h1>Sign In</h1>
      </div>
      <div className="Login_container">
        <div onClick={handleLoginWithGoogle} className="Login_container_item">
          <div>logo</div>
          <div>
            <h2>Sign in with Google</h2>
          </div>
        </div>
        <div
          onClick={() => authApi.loginWithGithub()}
          className="Login_container_item"
        >
          <div>logo</div>
          <div>
            <h2>Sign in with Github</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
