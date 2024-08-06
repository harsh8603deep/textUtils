import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    // function to convert in uppercase()
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!", "success");
  }

    const handleLowClick = ()=>{
      console.log("Lowercase was clicked" + text);
      // function to convert in Lowercase()
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase!", "success");
  }

  const handleClearClick = ()=>{
    console.log("Clear was clicked" + text);
    // function to clear the text()
    let newText = "";
    setText(newText)
    props.showAlert("Cleared!", "success");
}

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    console.log("Copy was clicked");
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // used to remove the selected text
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied!", "success");

  }
  // const handlePaste = () => {
  //   console.log("Paste was clicked");
  //   var text = document.getElementById("myBox");
  //   oncopyText();
  //   navigator.clipboard.writeText(text.value);
   
  // }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ")) 
    props.showAlert("Extra spaces removed!", "success");
  }

  // text will be update by setText
  const [text, setText] = useState('');
  // text = "new text"; wrong way to change the state
  // setText("new text");correct way to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-2'>{props.heading}</h1>
  <div className="mb-3">
    {/* <label for="myBox" class="form-label">Texrarea</label> */}
    <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy</button>
    {/* <button className='btn btn-primary mx-2' onClick={handlePaste}>Paste</button> */}
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <h4>Total number of words and charcters: </h4>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word, {text.length} characters</p>
      <h4>Total time required(in minutes): </h4>
      <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  
  )
}
