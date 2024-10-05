import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./store/store";

const GoogleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={GoogleClientId}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
