import React, { Component } from "react";
import moment from "moment";
import "./style.js";
import { StyleLi, StyleSpan } from "./style";

export default class Item extends Component {
  state = {
    mouse: false,
    time: moment(parseInt(Date.now())).format("YYYY-MM-DD HH:mm:ss"),
  };

  // mouse cursor
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };



  // delete todo item
  handleDelete = (id) => {
    return () => {
      this.props.deleteTodo(id);
    };
  };

//Delete button cursor moving in and out
  render() {
    const { id, name, done } = this.props;
    const { time } = this.state;
    return (
      <StyleLi
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <span
            style={{
              textDecorationLine: done === false ? "none" : "line-through",
            }}
          >
            {name}
          </span>
        </label>

        <button
          onClick={this.handleDelete(id)}
          style={{ display: this.state.mouse ? "block" : "none" }}
        ></button> 

        <StyleSpan onClick={() => {
          let nv = prompt('Please enter the content to be modified')
          this.props.editTodo(id, nv)
        }}>edit</StyleSpan>

        <StyleSpan>{time}</StyleSpan>
      </StyleLi>
    );
  }
}
