import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class DefaultClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"Utkarsh"
        }
    }

    render() {
        return (
            <div>
              <h1>{this.props.name}</h1>
              <h1>{this.props.email}</h1>  
            </div>
        )
    }
}

DefaultClass.propTypes ={
    name:PropTypes.string.isRequired,
    email:PropTypes.string

}

DefaultClass.defaultProps ={
    name:"Utkarsh Singh",
    email:"utkarah201Singh@gmail.com"
}
export default DefaultClass;
