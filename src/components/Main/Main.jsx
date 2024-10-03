import React, { useRef, useState } from "react";
import "./Main.css";

const Main = () => {
  const [text, setText] = useState("");

  const input = useRef(null);

  const GetData = (event) => {
    setText(event.target.value);
  };

  const onUppercaseBtn = () => {
    setText(text.toUpperCase());
  };

  const onLowercaseBtn = () => {
    setText(text.toLowerCase());
  };

  const ClearBtn = () => {
    setText("");
  };

  const CopytextBtn = () => {
    input.current?.select();
    window.navigator.clipboard.writeText(text);
  };

  const SpaceBtn = () => {
    setText(text.trim());
  };

  const PasteBtn = () => {
    input.current.value = window.Navigator.clipboard.GetData("hellol");
  };

  return (
    <>
      <div className="container">
        <div className="textAreacontainer">
          <div className="textArea">
            <h1 className="light">Enter Text Below To Customize</h1>
            <div className="textTab">
              <textarea
                value={text}
                id="myBox"
                onChange={GetData}
                placeholder="Enter the value"
                className="yt"
                rows={3}
                ref={input}
              ></textarea>
            </div>
          </div>
          <div className="Buttons">
            <button
              disabled={text.length < !0}
              className="btn"
              onClick={onUppercaseBtn}
            >
              UPPERCASE
            </button>
            <button
              disabled={text.length < !0}
              className="btn"
              onClick={onLowercaseBtn}
            >
              LOWERCASE
            </button>
            <button
              disabled={text.length < !0}
              className="btn"
              onClick={ClearBtn}
            >
              CLEAR
            </button>
            <button
              disabled={text.length < !0}
              className="btn"
              onClick={CopytextBtn}
            >
              COPY TEXT
            </button>
            <button
              disabled={text.length < !0}
              className="btn"
              onClick={SpaceBtn}
            >
              CLEAR SPACES
            </button>
            <button
              disabled={text.length < !0}
              className="btn"
              onClick={PasteBtn}
            >
              PASTE
            </button>
          </div>
        </div>

        <div className="textSummaryContainer">
          <div className="textSummary">
            <h1 className="light">Your Text Summary</h1>
            <p className="light">
              {text.split(" ").length} Word and {text.length} Characters
            </p>
            <p className="light">
              {0.008 * text.split(" ").length} Minutes To Read
            </p>
            <div className="preview light">
              <h2>Preview</h2>
              <p>{text.length > 0 ? text : "Nothing To Preview!"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
