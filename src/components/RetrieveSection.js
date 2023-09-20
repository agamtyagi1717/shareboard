import React, { useState } from "react";

const RetrieveSection = () => {
  const [id, setID] = useState('');
  const [retrievedText, setRetrievedText]=useState('');

  const handleIDChange = (e) => {
    setID(e.target.value);
    // console.log(id);
  }

  const retrieveCopied = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:8000/retrieve?id=${id}`);
    const retrieved = await response.json();

    const retrievedText=retrieved.data.text;
    setRetrievedText(retrievedText);
    

    console.log(retrievedText);    
  }


  return (
    <div className="copy-section">
      <form onSubmit={retrieveCopied} className="copy-form">
        <textarea value={retrievedText} onChange={setRetrievedText} rows={8}></textarea>

        <div>
          <input value={id} onChange={handleIDChange} className="id-input" placeholder="Enter ID"></input>
          <button>Retrieve from Clipboard</button>
        </div>
      </form>
    </div>
  );
};

export default RetrieveSection;
