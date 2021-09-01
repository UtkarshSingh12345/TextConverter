
import React , {useState} from 'react';
import PropTypes from 'prop-types';
// import About from "./Components/About.jsx"
import Form from "./TextForm.jsx";
function App(props) {
 
 // Thsese are all useState to put the state
 const [text , setText] = useState("Home-DarkMode");
 const [text1 , setColor] = useState("primary");
 const [handle , setHandle] = useState(true);
 const [color , setNavbarColor ] = useState("dark");


 // Dark mode of Whole body 
 const changeStyle = ()=>{
  if(handle) 
  {
  setText("Home-LightMode");
  setColor("dark btn-outline-light");
  document.querySelector("body").style.backgroundColor = "grey";
  document.querySelector("h1").style.color = "white";
  setHandle(false);
  setNavbarColor('light');
  }
 else
 {
  setText("Home-DarkMode");
  setColor("primary");
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("h1").style.color = "black";
  setHandle(true);
  setNavbarColor("dark");
 }             
 }


//Style Button with a Dark Mode 
 var object4 = {
   position:'absolute',
   top:'4em',
   right:'-3em',
   borderRadius:'50px',
   paddingRight:'50px'

 }
 

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${color} bg-${color}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" >{props.about}</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

{/* this is a form */}
 <div className="container my-3" >
<Form headings="Enter any text to analyze"/>
</div> 

{/* {This is a About Component which you can Enable } */}
{/* <About style={{position:'relative'}}/> */}
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
