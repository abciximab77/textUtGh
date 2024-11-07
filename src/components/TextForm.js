import React, { useState } from "react";

export default function TextForm(props) {
  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const titleCase = () => {
    let newtext = text.toLowerCase().split(" ");
    for (let i = 0; i < newtext.length; i++) {
      newtext[i] = newtext[i].charAt(0).toUpperCase() + newtext[i].slice(1);
    }
    setText(newtext.join(" "));
  };

  const capitalFirst = () => {
    let newtext = text.toLowerCase();
    newtext = newtext.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, (i) =>
      i.toUpperCase()
    );
    setText(newtext);
  };

  const clearText = () => {
    if (window.confirm("Do you wish to clear all text")) {
      let newText = "";
      setText(newText);
    } else {
      return;
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);

    document.getElementById("copyBtn").innerHTML = "Text Copied!";
    setTimeout(() => {
      props.showAlert(" Copied to clipboard", "success");
    }, 500);
    setTimeout(function () {
      document.getElementById("copyBtn").innerHTML = "Copy Text (Copy Text)";
    }, 2500);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="h1-title my-4">{props.heading}</h1>
        <div className="mb-3 main-box">
          <textarea
            className="form-control text-box mb-4"
            id="myBox"
            rows={10}
            onChange={handleOnChange}
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#204A66",
              color: props.mode === "light" ? "black" : "white",
            }}
          />
        </div>
        <button
          title="Removes extra spaces in text."
          className="btn btn-primary remove-btn mx-1 my-1"
          onClick={removeSpace}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          title="Converts text to upper case."
          className="btn btn-primary upper-btn  mx1 my-1"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          TO UPPER CASE
        </button>
        <button
          title="Converts text to lower case."
          className="btn btn-primary lower-btn mx-1 my-1"
          onClick={handleLoClick}
          disabled={text.length === 0}
        >
          to lower case
        </button>
        <button
          title="Converts first letter of each word to capital."
          className="btn btn-primary title-btn  mx1 my-1"
          onClick={titleCase}
          disabled={text.length === 0}
        >
          To Title Case
        </button>
        <button
          title="Converts first letter of each sentence to capital letter."
          className="btn btn-primary capital-btn mx-1 my-1"
          onClick={capitalFirst}
          disabled={text.length === 0}
        >
          To capitalize
        </button>
        <button
          title="Clears the entered text."
          className="btn btn-primary clear-btn  mx1 my-1"
          onClick={clearText}
          disabled={text.length === 0}
        >
          Clear Text (......)
        </button>
        <button
          title="Copies the entered/altered text."
          id="copyBtn"
          className="btn btn-primary copy-btn mx-1 my-1"
          onClick={copyText}
          disabled={text.length === 0}
        >
          Copy Text (Copy Text)
        </button>
      </div>

      <div
        className="container my-3 text-summary"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="text-summary-title ">Your text summary</h1>
        <p className="summary-text">
          The text contains{" "}
          <strong>
            <u>
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              words
            </u>
          </strong>{" "}
          and{" "}
          <strong>
            <u>{text.length}</u>
          </strong>{" "}
          characters.
        </p>
        <p className="text-fact">
          &#9758; &nbsp;
          <em title="Based on average speed of reading 150 words per minute.">
            A person with average reading speed will take{" "}
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes to read this text.
          </em>
        </p>
        <h3 className="h3-preview">Preview</h3>
        <p className="preview-text">
          {text.length > 0
            ? text
            : "Nothing to preview. Enter text in the text box above to preview."}
        </p>
      </div>
    </>
  );
}
