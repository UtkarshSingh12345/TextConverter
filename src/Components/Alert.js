import React from 'react'

export default function Alert(props) {
    return (
       <div style = {{height: '55px'}}>
       {props.alert === null ? null : 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show `  } role="alert">
       <strong>{props.alert.text} {props.alert.msg}</strong>
       </div>
       } 
       </div>
    )
}

// We can also use this syntax
//    props.object && <div className="alert alert-warning alert-dismissible fade show" role="alert">
//    <strong>{props.object.msg}</strong>
//    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//    </div>
