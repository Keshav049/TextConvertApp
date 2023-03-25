import React, { useState, useRef } from 'react'

// import { textAreaStyle } from "../style/textAreaStyle.css"

export default function TextForm(props) {

  //Uppercase function
  const convertToUpperCase = (event) => {
    setText((text).toUpperCase());
  }


  //lowercase function
  const convertToLoverCase = (event) => {
    setText(text.toLowerCase());

  }

  // each word first charcater capital function
  const eachWordFirstLatterCapital = () => {
    var str = "";
    let count = 0;
    str = text.charAt(0).toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text.charAt(i) === ' ') {
        str = str + text.charAt(i);
        count = 1;
      } else if (count === 1) {
        str = str + (text.charAt(i).toUpperCase());
        count = 0;
      } else {
        str = str + text.charAt(i);
      }
    }
    setText(str);
  }

  // remove space function
  const removeSpace = (event) => {
    var str = "";
    prevText.current = text;
    console.log(text);
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) !== ' ') {
        str = str + text.charAt(i);
      }
    }
    setText(str);

  }

  //add space function
  const addSpace = () => {
    var str = prevText.current;
    console.log(prevText.current);
    setText(str);
  }

  //remove Extra Spaces
  const removeExtraSpaces = () => {
    let str = "";
    str = str + text.charAt(0);
    for (let i = 1; i < text.length; i++) {
      if (text.charAt(i - 1) === " " && ((text.charAt(i) >= 'A' && text.charAt(i) <= 'Z') || (text.charAt(i) >= 'a' && text.charAt(i) <= 'z'))) {
        str = str + text.charAt(i);
      } else if ((text.charAt(i - 1) >= 'A' && text.charAt(i - 1) <= 'Z') || (text.charAt(i - 1) >= 'a' && text.charAt(i - 1) <= 'z')) {
        str = str + text.charAt(i);
      }
    }

    setText(str);
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);

  }


  //  var a=[];
  //  a.push(text);

  const [text, setText] = useState("");
  const prevText = useRef("");



  return (
    <div>
      <div className='conatainer my-3'>
        <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea className="form-control " id="text-area" value={text} onChange={handleOnChange}
            style={{
              backgroundColor: props.mode==='light'?'#d9dee0':'#a1a1a1',
              color: 'black',
              boxShadow: props.mode === 'dark' ? '10px 10px 5px #000000ab' : '10px 10px 5px #000000ab',
              fontWeight: "bold",
              width: "70%",
              marginLeft: "14%",
              position:"inherit"
            }} rows="10" />

        </div>
        <button className='btn btn-primary my-1 mx-1' style={{ boxShadow: "10px 10px 5px #000000ab",position:"inherit" }} id="upperCase" onClick={convertToUpperCase}>
          Uppercase
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary my-1 mx-1' style={{ boxShadow: "10px 10px 5px #000000ab",position:"inherit" }} id="loverCase" onClick={convertToLoverCase}>
          LoverCase
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary my-1 mx-1' style={{ boxShadow: "10px 10px 5px #000000ab",position:"inherit" }} id="firstLater" onClick={eachWordFirstLatterCapital}>
          fisrt Later Capital
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary my-1 mx-1' style={{ boxShadow: "10px 10px 5px #000000ab" }} id="removeSpace1" onClick={removeSpace}>
          Remove Space
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary my-1 mx-1' style={{ boxShadow: "10px 10px 5px #000000ab",position:"inherit" }} id="addSpace" onClick={addSpace}>
          Add Space
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary my-1 mx-1' style={{ boxShadow: "10px 10px 5px #000000ab",position:"inherit" }} id="removeExtraSpaces" onClick={removeExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div className='container my-3 mx-1'>
        <h3>Charcater Count and Word Count</h3>
        <p> Characters : {text.length} &nbsp;&nbsp;&nbsp;&nbsp;  Words : {text.split(" ").length}</p>
      </div>
    </div>
  )

}
