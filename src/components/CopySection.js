import React, { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
import { generate } from "shortid";

const CopySection = () => {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (text.length === 0) {
      setCode("Why would you wanna copy an empty string? Are you stupid?");
      return;
    }

    const newCode = generate();
    setCode(newCode);

    const data = { text, code: newCode };

    // Send a POST request to the server
    fetch("https://shareboard.onrender.com/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the server response (if needed)
        console.log(data);
      })
      .catch((error) => {
        // Handle errors (e.g., network issues)
        console.error("Error:", error);
      });
  };

  return (
    <div className="copy-section">
      <form onSubmit={handleSend} className="copy-form">
        <textarea value={text} onChange={handleTextChange} rows={8}></textarea>
        <div className="center-copy">
          <button className="button-0">Send to Clipboard</button>
          <p className="gen-id">
            <span>Generated ID:</span> {code}
          </p>
        </div>
      </form>
    </div>
  );
};

export default CopySection;
