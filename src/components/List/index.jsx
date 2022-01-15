import React, { Component } from "react";
import Item from "../Item";
import "./style.js";
import { StyleUl } from "./style.js";

export default class List extends Component {
  render() {
    const { todos, deleteTodo,  editTodo } = this.props;
    const date = window?.location?.search?.split("date=")[1]
    if (!todos[date]) {
      todos[date] = []
    }
    return (
      <StyleUl>
        {todos[date].map((todo) => {
          if(!todos){return}
          return (
            <Item
              key={todo?.id}
              {...todo}
             
              deleteTodo={deleteTodo}
              
              editTodo={editTodo}
            />
          );
        })}
      </StyleUl>
    );
  }
}
