import React , {useState} from 'react';
export default function TextForm(props) {
   const Change = (e)=>{
       console.log("Button has been Clicked");
       setText(text.toUpperCase());
   }
//    var count = 0;
   const hello = (e)=>{
   const a = e.target.value;

       
    //    if(a.length<100)
       setText(a);
    //    else
    //  {  alert("Please Delete some Words");
    //     count++;
    //  }
    //  if(count===5)
    //  {
    //      alert("you have exceeded 5 Warnings and now the text will be removed");
    //      setText(" ");
    //   }
 }
   const Clear = ()=>{
       setText("");
   } 
   
   const Lower = (e)=>{
       setText(text.toLowerCase());
   }
   
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
    const [text , setText] = useState("");
    const CopyText = ()=>{
        navigator.clipboard.writeText(text);
    }
    const RemoveSpace = ()=>{
        const TextSpace = text.split(/[ ]+/);
        setText(TextSpace.join(" "));
    }

    const firstLetterCapitalise = ()=>{
        var b = text;
        for( var a = 0 ; a<text.length ;a++ )
       {
           if((b[a] !== " " && b[a-1] === " ") || (b[a]!==" " && a===0))
           {
               b[a].toUpperCase();
               console.log(b[a].toUpperCase());
           }
           console.log(b);
        }
        console.log(b);
    }
    return (
         <> 
        <div className="container " >
        <h1 >{props.headings}</h1>
        <div className="mb-3">
       <textarea placeholder="Enter the text " className="form-control" value={text} onChange={hello} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div> 
       
        <button className="btn btn-primary" onClick={Change}>Convert into UpperCase</button>  
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
      <p>{text}</p>
      </div>
        </>
    )
}
