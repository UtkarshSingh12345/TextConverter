(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{46:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(12),s=c.n(a),r=c(5),l=c(1);function i(e){return Object(l.jsx)("div",{children:null===e.alert?null:Object(l.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:Object(l.jsxs)("strong",{children:[e.alert.text," ",e.alert.msg]})})})}var o=c(29),j=c.n(o),b=c(61);function d(e){var t={color:e.color,fontSize:"30px"};return Object(l.jsxs)(b.a,{children:[" ",Object(l.jsx)(j.a,{style:t})]})}function h(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),a=c[0],s=c[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"container ",children:[Object(l.jsx)("h1",{children:e.headings}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{placeholder:"Enter the text ",className:"form-control",value:a,onChange:function(e){var t=e.target.value;s(t)},id:"exampleFormControlTextarea1",rows:"8"})}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(t){a.length>0?(s(a.toUpperCase()),e.Warning(Object(l.jsx)("p",{children:"text converted to upperCase"}),"success",Object(l.jsx)("h2",{children:"Success"}))):e.Warning(Object(l.jsx)("p",{children:"no text to be converted to upperCase"}),"danger",Object(l.jsx)("h2",{children:"Danger"}))},children:"Convert into UpperCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(t){a.length>0?(s(a.toLowerCase()),e.Warning(Object(l.jsx)("p",{children:"text converted to lowerCase"}),"success",Object(l.jsx)("h2",{children:"Success"}))):e.Warning(Object(l.jsx)("p",{children:"no text to be converted to lowerCase"}),"danger",Object(l.jsx)("h2",{children:"Danger"}))},children:"Convert Into LowerCase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){a.length>0?(s(""),e.Warning(Object(l.jsx)("p",{children:"text hasBeen cleared"}),"success",Object(l.jsx)("h2",{children:"Success"}))):e.Warning(Object(l.jsx)("p",{children:"no text to clear"}),"danger",Object(l.jsx)("h2",{children:"Danger"}))},children:"Clear the text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){a.length>0?(navigator.clipboard.writeText(a),e.Warning(Object(l.jsx)("p",{children:"text hasBeen copied"}),"success",Object(l.jsx)("h2",{children:"Success"}))):e.Warning(Object(l.jsx)("p",{children:"no text to be copy"}),"danger",Object(l.jsx)("h2",{children:"Danger"}))},children:"Copy the text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){if(a.length>0){var t=a.split(/[ ]+/);s(t.join(" ")),e.Warning(Object(l.jsx)("p",{children:"all extra space hasBeen removed"}),"success",Object(l.jsx)("h2",{children:"Success"}))}else e.Warning(Object(l.jsx)("p",{children:"the body is empty no extra Space"}),"danger",Object(l.jsx)("h2",{children:"Danger"}))},children:"Remove Extra Spaces"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){for(var t=a,c=0;c<a.length;c++)0===c&&(t=t.slice(0,c)+t[c].toUpperCase()+t.slice(c+1))," "===t[c]&&" "!==t[c+1]&&(c++,t=t.slice(0,c)+t[c].toUpperCase()+t.slice(c+1));s(t),e.Warning(Object(l.jsx)("p",{children:"all first letter hasBeen capitalised"}),"success",Object(l.jsx)("h2",{children:"Success"}))},children:"First Letter-Capital"})]}),Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsx)("h2",{className:"heading2",children:" This is your Text Info "}),Object(l.jsxs)("p",{children:[a.split(" ").length," words and ",a.length," characters and the limit is ",1e3-a.length,"/1000"]}),Object(l.jsxs)("p",{children:[.008*a.split(" ").length," minute is taken to read ",a.split(" ").length," words"]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"heading2",children:"Preview Your Text"}),Object(l.jsx)("p",{children:0===a.length?"Preview Your Text Here":a})]})]})}function x(e){var t=Object(n.useState)("Home-DarkMode"),c=Object(r.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)("primary"),j=Object(r.a)(o,2),b=j[0],x=j[1],u=Object(n.useState)(!0),O=Object(r.a)(u,2),m=O[0],p=O[1],g=Object(n.useState)("dark"),v=Object(r.a)(g,2),f=v[0],y=v[1],C=Object(n.useState)("light"),k=Object(r.a)(C,2),N=k[0],S=k[1],w=Object(n.useState)({}),D=Object(r.a)(w,2),W=D[0],T=D[1],B=Object(n.useState)(null),U=Object(r.a)(B,2),E=U[0],H=U[1],L=Object(n.useState)("#050A30"),q=Object(r.a)(L,2),A=q[0],R=(q[1],function(e,t,c){H({msg:e,type:t,text:c}),setTimeout((function(){H(null)}),1500)}),F=function(){m?(s("Home-LightMode"),x("dark btn-outline-light"),document.querySelector("body").style.backgroundColor=A,document.querySelector("h1").style.color="#fff",p(!1),y("light"),S("dark"),T({color:"#fff"}),R(Object(l.jsx)("p",{children:"dark mode enabled"}),"success",Object(l.jsx)("h2",{children:"Success"}))):(s("Home-DarkMode"),x("primary"),document.querySelector("body").style.backgroundColor="white",document.querySelector("h1").style.color="black",p(!0),y("dark"),S("light"),T({}),H(null),R(Object(l.jsx)("p",{children:"bright mode enabled"}),"primary",Object(l.jsx)("h2",{children:"Success"})))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(f," bg-").concat(f),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.name}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"#",children:e.title})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link ",href:"/about",children:e.about})})]}),Object(l.jsxs)("div",{style:{marginRight:"20px",marginLeft:"-5px",marginBottom:"2px"},children:[Object(l.jsx)(d,{color:"red"}),Object(l.jsx)(d,{color:"purple"}),Object(l.jsx)(d,{color:"teal"}),Object(l.jsx)(d,{color:"#050A30"}),Object(l.jsx)(d,{color:"#E56997"}),Object(l.jsx)(d,{color:"#66D2D6"}),Object(l.jsx)(d,{color:"#FBC740"}),Object(l.jsx)(d,{color:"#BD97CB"})]}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat(N),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:F,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",forhtml:"flexSwitchCheckDefault",children:a})]})]})]})}),Object(l.jsx)(i,{alert:E}),Object(l.jsx)("div",{className:"container my-3",style:W,children:Object(l.jsx)(h,{Warning:R,headings:"Enter the text to analyze below"})}),Object(l.jsx)("button",{className:"btn btn-".concat(b),onClick:F,style:{position:"absolute",top:"5em",right:"-3em",borderRadius:"50px",paddingRight:"50px"},children:a})]})}x.defaultProps={name:"Utkarsh Singh",title:"Default Title",about:"Default About"};var u=x;function O(){return Object(l.jsx)("div",{children:Object(l.jsx)(u,{name:"Utkarsh Singh",title:"Title-Utils",about:"About-Utils"})})}s.a.render(Object(l.jsx)("div",{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ee0104c0.chunk.js.map