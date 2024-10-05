import React from "react";
import "./style.scss";
import Header from "../../components/Header";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main">
      <div className="main_header">
        <Header />
      </div>
      <div className="main_body">{children}</div>
    </div>
  );
};

export default Main;
