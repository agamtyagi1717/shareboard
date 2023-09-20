import React from "react";

const RetrieveSection = () => {
  return (
    <div className="copy-section">
      <form className="copy-form">
        <textarea rows={8}></textarea>

        <div>
          <input className="id-input" placeholder="Enter ID"></input>
          <button>Retrieve from Clipboard</button>
        </div>
      </form>
    </div>
  );
};

export default RetrieveSection;
