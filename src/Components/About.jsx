import React , {useState}from 'react'

export default function About() {
  let object1 = {
    backgroundColor:'#000',
    color:'#fff'
  }
  let object2 = {
    backgroundColor:'#fff',
    color:'#000'
  }
  const [object , setObject] = useState();
  let [object3 ,setObject3] = useState(false);
  const [data , setData] = useState("Dark-mode");
  const [color , setColor] = useState("primary");
  const change = ()=>{
    if(object3===false)
   {
     setObject(object1);
     setObject3(true);
     setData('Light-Mode');
     setColor('dark btn-outline-light');
   }
    else if(object3===true)
    {
      setObject(object2);
      setObject3(false);
      setData('Dark-Mode');
      setColor('primary');
    }

  }
  return (
        <div className="container my-5 " style = {object}>
        <h1 className="my-3"> About-Us </h1>
            <div className ="accordion" id="accordionExample">
  <div className ="accordion-item">
    <h2 className ="accordion-header" id="headingOne" >
      <button className ="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {object}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className ="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className ="accordion-body" style = {object}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate className es that we use to style each element. These className es control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className ="accordion-item">
    <h2 className ="accordion-header" id="headingTwo">
      <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {object}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className ="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className ="accordion-body" style = {object}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate className es that we use to style each element. These className es control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className ="accordion-item">
    <h2 className ="accordion-header" id="headingThree">
      <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {object} >
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className ="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className ="accordion-body"style = {object}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate className es that we use to style each element. These className es control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button  onClick={change}   className={`btn btn-${color} my-3`} >{data}</button>
        </div>
    )
}
