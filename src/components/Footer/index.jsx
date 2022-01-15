import React, { Component } from "react";

import { StyleDiv } from "./style";

export default class Footer extends Component {

  render() {
    const date = window?.location?.search?.split("date=")[1]
   
    const { todos } = this.props;
    if(!todos[date]){
      todos[date] = []
    }
    
    return (
      <StyleDiv>
       
      </StyleDiv>
    );
  }
}
