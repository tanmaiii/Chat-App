import React from "react";
import "./style.scss";
import { authApi } from "../../apis";
import Imgaes from "../../constants/images";
import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
const Login = () => {
  const dispatch = useDispatch();

  const handleLoginWithGoogle = async () => {
    try {
      const res = await authApi.loginWithGoogle();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginWithGithub = async () => {
    try {
      const res = await authApi.loginWithGithub();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuccess = (response: any) => {
    try {
      const userInfo = jwtDecode(response.credential);
      console.log("User Info:", userInfo);

      const userData = {
        user: { id: 1, name: "John Doe", email: "john.doe@example.com" },
        token: "fake-jwt-token",
      };

      // Dispatch action login với thông tin người dùng
      dispatch(login(userData));
    } catch (error) {}
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="Login">
      <div className="Login_header">
        <h1>Sign In</h1>
      </div>
      <div className="Login_container">
        <GoogleLogin onSuccess={handleSuccess} onError={onError} />

        <div onClick={handleLoginWithGoogle} className="Login_container_item">
          <div className="Login_container_item_logo">
            <img src={Imgaes.GOOGLE} alt="Google logo" />
          </div>
          <div className="Login_container_item_desc">
            <h2>Sign in with Google</h2>
          </div>
        </div>

        <div onClick={handleLoginWithGithub} className="Login_container_item">
          <div className="Login_container_item_logo">
            <img src={Imgaes.GITHUB} alt="Google logo" />
          </div>
          <div className="Login_container_item_desc">
            <h2>Sign in with Github</h2>
          </div>
        </div>
        {/* <div className="line">
          <span>Or</span>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
