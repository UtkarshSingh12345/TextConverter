import React , {useState} from 'react';
export default function TextForm(props) {
    const [text , setText] = useState("");
   
    // To set all letter to Upper case
    const Upper = (e)=>{
        if(text.length>0)
        { setText(text.toUpperCase());
          props.Warning(<p>text converted to upperCase</p> , "success" , <h2>Success</h2>);}
         else
         props.Warning(<p>no text to be converted to upperCase</p> , "danger" , <h2>Danger</h2>);
    }
   //var count = 0;
   // Setting text at the value of the text area and at the input of textArea
    const hello = (e)=>{
    const a = e.target.value;
    setText(a);
    
    // This is to set a Authentication Warning
    //    if(a.length<100)
    //    else
    //  {  alert("Please Delete some Words");
    //     count++;
    //  }
    //  if(count===5)
    //  {
    //      alert("you have exceeded 5 Warnings and now the text will be removed");
    //      setText(" ");
    //}
    }
   
   const Clear = ()=>{
      if(text.length>0) 
      {setText("");
      props.Warning(<p>text hasBeen cleared</p> , "success" , <h2>Success</h2>);}
      else
      props.Warning(<p>no text to clear</p> , "danger" , <h2>Danger</h2>);
   } 
   
   const Lower = (e)=>{
    if(text.length>0)
   { setText(text.toLowerCase());
    props.Warning(<p>text converted to lowerCase</p> , "success" , <h2>Success</h2>);}
    else
    props.Warning(<p>no text to be converted to lowerCase</p> , "danger" , <h2>Danger</h2>);
   }

// This is to enable Dark Mode   
//     let handle = 0;
//     const Dark = ()=>{
//     if(handle ===0)
//     {
//         document.querySelector("body").classList.add("hello");
//         document.querySelector("h1").classList.add("h1");
//         document.querySelector(".heading2").classList.add("h1");
//         document.querySelector("p").classList.add("p");
//         handle=1;
//     }
//     else
//     {
//         document.querySelector("body").classList.remove("hello");
//         document.querySelector("h1").classList.remove("h1");
//         document.querySelector(".heading2").classList.remove("h1");
//         document.querySelector("p").classList.remove("p");
//         handle=0;
//     }
// }

    // To Copy the text
    const CopyText = ()=>{
        if(text.length>0)
        { navigator.clipboard.writeText(text);
          props.Warning(<p>text hasBeen copied</p> , "success" , <h2>Success</h2>);}
         else
         props.Warning(<p>no text to be copy</p> , "danger" , <h2>Danger</h2>);
    }

    // To remove Extra Space
    const RemoveSpace = ()=>{
        if(text.length>0)
        { const TextSpace = text.split(/[ ]+/);
          setText(TextSpace.join(" "));
          props.Warning(<p>all extra space hasBeen removed</p> , "success" , <h2>Success</h2>);}
        else
        props.Warning(<p>the body is empty no extra Space</p> , "danger" , <h2>Danger</h2>);
        
    }
    // To convert the word first letter to Upper Case
    const firstLetterCapitalise = ()=>{
        
        var b = text;
        for( var a = 0 ; a<text.length ;a++ )
       { 
         if(a===0) { b = b.slice(0,a) +  b[a].toUpperCase() + b.slice(a+1);}
         if(b[a]===" " && b[a+1]!==" ")
         {  a++;
            b = b.slice(0,a) +  b[a].toUpperCase() + b.slice(a+1);
         }

       }
       setText(b);
       props.Warning(<p>all first letter hasBeen capitalised</p> , "success" , <h2>Success</h2>);
    }


    return (
         <> 
        <div className="container " >
        <h1 >{props.headings}</h1>
        <div className="mb-3">
       <textarea placeholder="Enter the text " className="form-control" value={text} onChange={hello} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div> 
       
        <button className="btn btn-primary" onClick={Upper}>Convert into UpperCase</button>  
        <button className="btn btn-primary mx-2" onClick={Lower}>Convert Into LowerCase</button>  
        <button className="btn btn-primary mx-1 my-2" onClick={Clear}>Clear the text</button>  
        <button className="btn btn-primary mx-1 my-2" onClick={CopyText}>Copy the text</button>
        <button className="btn btn-primary mx-1 my-2" onClick={RemoveSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-2" onClick={firstLetterCapitalise}>First Letter-Capital</button>
        </div>
        <div className="container my-3">
        <h2 className = "heading2"> This is your Text Info </h2>
        <p>{text.split(" ").length} words and {text.length} characters and the limit is {1000-text.length}/1000</p>
        <p>{0.008*text.split(" ").length} minute is taken to read {text.split(" ").length} words</p>
        </div>
       <div className="container">
       <h2 className = "heading2">Preview Your Text</h2>
       <p >{text.length === 0 ? "Preview Your Text Here" : text}</p>
      </div>
        </>
    )
}
