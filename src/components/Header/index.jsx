import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./style.js";
import { StyleInput, StyleSpan } from "./style.js";

export default class Header extends Component {
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return; 
    if (target.value.trim() === "") {
      alert("please enter something");
      return;
    }

    // pass todoObj to App
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.addTodo(todoObj);

    target.value = ""; //clear content
  };

  render() {
    return (
      <div>
        <StyleSpan></StyleSpan>
        <StyleInput
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Please add your to do item"
        />
      </div>
    );
  }
}
