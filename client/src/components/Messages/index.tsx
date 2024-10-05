import React from "react";
import "./style.scss";
import Input from "../Input";
import MessageItem from "../MessageItem";

const Messages = () => {
  return (
    <div className="Messages">
      <div className="Messages_header">
        <div className="Messages_header_info">
          <div className="Messages_header_info_avatar">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <div className="Messages_header_info_desc">
            <h4>John Cena</h4>
            <span>Active 10m ago</span>
          </div>
        </div>
      </div>
      <div className="Messages_body">
        <div className="Messages_body_list">
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
        </div>
      </div>
      <div className="Messages_input">
        <Input />
      </div>
    </div>
  );
};

export default Messages;
