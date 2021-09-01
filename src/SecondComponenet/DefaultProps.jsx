import React from 'react';


export default function DefaProps(props) {
    return (
        <div>
        <Info name="Utkarsh Singh" title="this is all about me" email="utkarah201Singh@gmail.com" type = "String" />
        <Info name="Utkarsh Singh" title="this is all about me" email="utkarah201Singh@gmail.com" type = "String" />
        <Info name="Utkarsh Singh" title="this is all about me" email="utkarah201Singh@gmail.com" type = "String" />
        <Info name="Utkarsh Singh" title="this is all about me" email="utkarah201Singh@gmail.com" type = "String" />

        </div>
    )
}


 function Info(Props) {
    return (
        <div>
            <h1>{Props.name}</h1>
            <h1>{Props.title}</h1>
            <h1>{Props.email}</h1>
            <h1>{Props.type}</h1>

        </div>
    )
}

DefaProps.defaultProps = {
    name:"Deepak",
    title:"Hello" , 
    email:"syusgd@jhwkwkfn",
    type:"String"
}