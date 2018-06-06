import React, { Component } from 'react';

// const Welcome = (props) => <h1>Hola {props.name}</h1>;

class Welcome extends Component{
  constructor(props){
    super(props);
  }

render(){
  return <h1>Hola {this.props.name}</h1>;
  }
}



export default Welcome;
