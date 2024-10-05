import React from "react";
import "./style.scss";

const MessageItem = () => {
  return (
    <div className="MessageItem outgoing">
      <div className="MessageItem_avatar">
        <img src="https://via.placeholder.com/150" alt="avatar" />
      </div>
      <div className="MessageItem_content">
        <div className="MessageItem_content_header">
          <h4>John Cena</h4>
          <span className="time">10:10</span>
        </div>
        <div className="MessageItem_content_desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            maiores aspernatur debitis totam enim veniam! Hic suscipit voluptas
            consequatur est corporis ullam doloribus. Ipsum aperiam cumque
            tempore, quae inventore ipsam!
          </p>
          <div className="MessageItem_content_desc_buttons">
            <button>
              <i className="fa-regular fa-face-smile"></i>
            </button>
            <button>
              <i className="fa-solid fa-reply"></i>
            </button>
            <button>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
