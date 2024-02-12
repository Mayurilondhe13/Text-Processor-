import React,{useDebugValue, useState} from 'react'

export default function Textbox(props) {
    const handleUpClick=()=>{
       
        let newText=text.toUpperCase();
        setText(newText)
        
    }

    const handleLoClick=()=>{
       
        let newText=text.toLowerCase();
        setText(newText)
        
    }
    const handleOnChange=(event)=>{
       
        setText(event.target.value);
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className='container'>
      
  <h1>{props.heading}</h1>
<div className="form-group">

<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<div className='button'>
<button className='btn btn-dark mx-0 my-0' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-dark mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
</div>
    </div>
    <div className='container my-3'>
        <h4>Your Text Summary</h4>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008* text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
         <p>{text}</p>
    </div>
   </>
  )
}
