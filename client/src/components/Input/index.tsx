import React, { useEffect } from "react";
import "./style.scss";

const Input = () => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const innitHeight = 40;
  const [keyword, setKeyword] = React.useState<string>("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const handleInput = () => {
    if (inputRef.current) {
      inputRef.current.style.height = `${innitHeight}px`;
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="input">
      <div className="input_file"></div>
      <div className="input_chat">
        <textarea
          onChange={(e) => setKeyword(e.target.value)}
          ref={inputRef}
          onInput={handleInput}
          placeholder="Nhập "
        />
      </div>
      <div className="input_button">
        <button className={`${keyword ? "active" : ""}`}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default Input;
