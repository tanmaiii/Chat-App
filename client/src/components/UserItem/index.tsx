import React from "react";
import "./style.scss";

const UserItem = () => {
  return (
    <div className="UserItem">
      <div className="UserItem_avatar">
        <img src="https://via.placeholder.com/150" alt="avatar" />
      </div>
      <div className="UserItem_content">
        <div className="UserItem_content_header">
          <h4>John Cena</h4>
          <span>03:10</span>
        </div>
        <div className="UserItem_content_desc">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            maiores aspernatur debitis totam enim veniam! Hic suscipit voluptas
            consequatur est corporis ullam doloribus. Ipsum aperiam cumque
            tempore, quae inventore ipsam!
          </span>
          <div className="notify"></div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
