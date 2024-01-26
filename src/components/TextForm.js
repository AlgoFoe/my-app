import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpcase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLocase = () =>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  const checkEmail=()=>{
    const words = text.split(/\s+/);
    const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const emails =[];
    for(const word of words){
      if(pattern.test(word)){
        emails.push(word);
      }
    }
    setEmail(emails)
    setTimeout(resetText,5000) 
  }
  const resetText=()=>{
    setText(text)
  }

  const [text, setText] = useState("");
  const [email,setEmail] = useState([]);

  return (
    <>
      <div className="container" >
        <div className="mb-3 my-1">
          <h3>{props.head}</h3>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            style={props.myStyle}
            rows="7"
          ></textarea>
        </div>
        <button
          type="button"
          style={props.myStyle}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpcase}
        >
          Change to Uppercase
        </button>
        <button
          type="button"
          style={props.myStyle}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLocase}
        >
          Change to Lowercase
        </button>
        <button
          type="button"
          style={props.myStyle}
          className="btn btn-primary mx-2 my-1"
          onClick={checkEmail}
        >
          Extract Email
        </button>
      </div>
        
      <div className="container mt-5 my-4 mb-0" style={props.myStyle}>
        <div className="box">
          <h2>Preview</h2>
          <hr />
          <p>{text}</p>
          <hr />
          <p>Extracted Emails:</p>
          <p>{email.join('  ,  ')}</p>
          <p>{text===""? 0: text.split(" ").length} words and {text.length} characters</p>
        </div>
      </div>
    </>
  );
}
