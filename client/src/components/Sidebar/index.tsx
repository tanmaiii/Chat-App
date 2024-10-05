import React from "react";
import "./style.scss";
import UserItem from "../UserItem";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar_header">
        <button>
          <i className="fa-regular fa-sidebar"></i>
        </button>
        <button>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="Sidebar_input">
        <div className="Sidebar_input_search">
          <input type="text" placeholder="Search" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="Sidebar_list">
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    </div>
  );
};

export default Sidebar;
