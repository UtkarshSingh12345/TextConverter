
import React , {useState} from 'react';
import PropTypes from 'prop-types';
// import About from "./Components/About.jsx";
import Alert from "./Alert.js";
import DarkmodeColor from "./darkModeColors.jsx";
import Form from "./TextForm.jsx";
import {Link} from "react-router-dom"
function App(props) {
 

 // Thsese are all useState to put the state
 const [text , setText] = useState("Home-DarkMode");
 const [text1 , setColor] = useState("primary");
 const [handle , setHandle] = useState(true);
 const [color , setNavbarColor ] = useState("dark");
 const [switchTextColor , setSwitchTextColor] = useState("light");
 const [object , setStyle]  = useState({});
 const [alert , setAlert] = useState(null);
 const [changeDarkModeColor , setDarkMode] = useState("#050A30");
 
 // This is for givinf 
 const alertMode = (message , type , text)=>{
 setAlert({
   msg:message,
   type:type,
   text:text
 })
 setTimeout(()=>{setAlert(null)} , 1500);
 }

 // Dark mode of Whole body 
 const changeStyle = (cls)=>{
  if(handle) 
  {
  setText("Home-LightMode");
  setColor("dark btn-outline-light");
  document.querySelector("body").style.backgroundColor =changeDarkModeColor;
  document.querySelector("h1").style.color = "#fff";
  setHandle(false);
  setNavbarColor('light');
  setSwitchTextColor("dark");
  setStyle({color:'#fff'});
  alertMode(<p>dark mode enabled</p> , "success" , <h2>Success</h2>);
  // document.title = "Dark Mode Enabled";
  // To set a flashable message in title bar
  // setInterval(()=>{ document.title ="Welcome User"} , 1500);
  // setInterval(()=>{document.title ="Lets Start"} , 2500);
  }
 else
 {
  setText("Home-DarkMode");
  setColor("primary");
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("h1").style.color = "black";
  setHandle(true);
  setNavbarColor("dark");
  setSwitchTextColor("light");
  setStyle({});
  setAlert(null);
  alertMode(<p>bright mode enabled</p> , "primary" , <h2>Success</h2>);
  // document.title="light mode enabled";
 }             
 }

 
//Style Button with a Dark Mode 
 var object4 = {
   position:'absolute',
   top:'5em',
   right:'-3em',
   borderRadius:'50px',
   paddingRight:'50px'

 }
  const paddingRight ={
  marginRight:'20px',
  marginLeft:'-5px',
  marginBottom:'2px'
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${color} bg-${color}`}>
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/">{props.name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about" >{props.about}</Link>
        </li>
      </ul>
  <div style={paddingRight}>
  <DarkmodeColor onclick={()=>{changeStyle("red")}} color={"red"} />
  <DarkmodeColor onclick={()=>{changeStyle("teal")}} color={"teal"} />
  <DarkmodeColor onclick={()=>{changeStyle("#050A30")}} color={"#050A30"} />
  <DarkmodeColor onclick={()=>{changeStyle("#E56997")}} color={"#E56997"} />
  <DarkmodeColor onclick={()=>{changeStyle("#66D2D6")}} color={"#66D2D6"} />
  <DarkmodeColor onclick={()=>{changeStyle("#FBC740")}} color={"#FBC740"} />
  <DarkmodeColor onclick={()=>{changeStyle("#BD97CB")}} color={"#BD97CB"} />
  </div>
  <div className={`form-check form-switch text-${switchTextColor}`}>
  <input className="form-check-input" onClick = {changeStyle} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" forhtml="flexSwitchCheckDefault">{text}</label>
  </div>
  </div>
  </div>
  </nav>
<Alert alert = {alert}/>
{/* this is a form */}
<div className="container my-3" style = {object}>
<Form Warning ={alertMode} headings = "Enter the text to analyze below" />
</div> 

{/* {This is a About Component which you can Enable } */}
{/* <Linkbout style={{position:'relative'}}/> */}
 <button className={`btn btn-${text1}`} onClick={changeStyle} style = {object4}>{text}</button></div>
  )
}

App.defaultProps = {
  name:"Utkarsh Singh",
  title:"Default Title",
  about:"Default About",
}

App.propTypes = {
  title :PropTypes.string.isRequired,
  about: PropTypes.string,
}


export default App;
