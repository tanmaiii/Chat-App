import { apiConfig, axiosClient } from "../../configs";

const auth = {
  loginWithGoogle: async () => {
    const url = "/auth/google";
    window.open(apiConfig.baseUrl + url, "_self");
  },
  loginWithGithub: async () => {
    const url = "/auth/github";
    window.open(apiConfig.baseUrl + url, "_self");
  },
  loginSuccess: async () => {
    const url = "/auth/login/success";
    return await axiosClient.get(url);
  },
  logout: async () => {
    const url = "/auth/logout";
    return await axiosClient.get(url);
  },
};

export default auth;
