// src/store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;

      // Lưu thông tin vào localStorage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;

      // Xóa thông tin khỏi localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

// Export action để có thể dispatch
export const { login, logout } = authSlice.actions;

// Export reducer để dùng trong store
export default authSlice.reducer;
