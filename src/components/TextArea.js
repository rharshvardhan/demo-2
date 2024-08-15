import React, {useState} from 'react'
export default function TextArea(props) {
  // var disabled = false;

  // const disble=()=>{
  //   var len = text;
  //   if(len.length == 0)
  //     return false 
  //   else
  //   return true
  // }
    const changeEvent = () =>{
        //console.log("it worked !!!!")
        let v = text.toUpperCase();
        setText(v);
        props.showAlert("Converted to Upper Case","success");
        
    }

    const handleonchange = (event)  =>{
        //console.log(event.target.value)
        setText(event.target.value)
        
    }

    const changeEventLower= ()=>{
      let v = text.toLocaleLowerCase();
      setText(v);
      props.showAlert("Converted to Lower Case","success");
       
    }

    const clearText = () =>{
      var a = "";
      setText(a);
    }
    const [text,setText] = useState('');

    const copytoclip=()=>{
      navigator.clipboard.writeText(text).then(()=>{
        props.showAlert("Copied","success")
      })
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
       <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'white':'black'}} onChange={handleonchange}  id="mybox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={changeEvent} >Convert to Upper Case</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 ' onClick={changeEventLower} >Convert to Lower Case</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 ' onClick={clearText} >Clear</button>
    <button disabled={text.length===0} type="button" class="btn btn-primary" onClick={copytoclip}>Copy</button>


    </div>
   
   <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
   <h3> The total letters is {text.length} and total words is {text.split(" ").filter((element)=>{return element.length!==0}).length} , time required to read {0.004 * text.split(" ").filter((element)=>{return element.length!==0}).length}</h3>
   <h2>Preview :</h2>
   <p> {text.length>0?text:"Nothing to display"} </p>
   </div>
    
    </>
  )
}
