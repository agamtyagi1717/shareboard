import React, { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
import { generate } from "shortid";

const CopySection = () => {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
    if (text.length > 0) {
      setCode(generate());
    }
  };

  const handleSend = (e) => {
    e.preventDefault();

    const data = { text, code };

    // Send a POST request to the server
    fetch("http://localhost:8000/save", {
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
        <div>
          <button>Send to Clipboard</button>
          <p className="gen-id">
            <span>Generated ID:</span> {code}
          </p>
        </div>
      </form>
    </div>
  );
};

export default CopySection;
