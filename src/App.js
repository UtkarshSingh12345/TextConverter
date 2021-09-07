import React from 'react'
import Navbar from "./Components/props.jsx";
import Navbar1 from './Components/Navbar.jsx';
import About from "./Components/About.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
export default function Props() {

    return (
       
        <div>
        <Router>
        <Switch>
         <Route exact path = "/" >
           <Navbar name = "Utkarsh Singh" title = "title-Utils" about = "about-utils" />
         </Route>
         <Route exact path = "/about" >
           <Navbar1 name = "Utkarsh Singh" title = "title-Utils" about = "about-utils" />
           <About/>
         </Route>
         </Switch>
        </Router>
       </div>)
    
    
}
