import React from "react";
import "./style.scss";
import Sidebar from "../../components/Sidebar";
import Messages from "../../components/Messages";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_container_sidebar">
          <Sidebar />
        </div>
        <div className="home_container_messages">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default Home;
