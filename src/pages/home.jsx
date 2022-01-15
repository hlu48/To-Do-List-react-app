import React, { Component } from "react";

import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";

import {
  StyleDiv,
  StyleTop,
  StyleBottom,
  StyleP,
  GlobalStyle,
} from "../style.js";

export default class Home extends Component {
  state = {
    todos: {}, //store info such as {id:1,name:'eat'} 
   
    date:
      window?.location?.search?.indexOf("date=") !== -1
        ? Number(window?.location?.search?.split("date=")[1])
        : 2022,
    id: 1,
    filterData: {}
  };
  componentDidMount() {
    window.localStorage.getItem('data');
    if (window.localStorage.getItem('data')) {
      this.setState({
        todos: JSON.parse(window.localStorage.getItem('data') || {}),
        filterData: JSON.parse(window.localStorage.getItem('data') || {})
      }, () => {
        console.log(this.state.todos)
      })
    }
  }
  
 

  // add item to the list
  addTodo = (todoObj) => {
    const { todos, filterData } = this.state; 
    const date = window?.location?.search?.split("date=")[1]
    todos[date] = [todoObj, ...todos[date] || []]
    filterData[date] = [todoObj, ...filterData[date] || []]
    window.localStorage.setItem('data', JSON.stringify(todos))
    this.setState({ todos: todos, filterData: filterData }, () => {
      console.log(this.state.filterData)
    }); 
  };

  // delete a todo item
  deleteTodo = (id) => {
    const { todos, filterData } = this.state; 
    const date = window?.location?.search?.split("date=")[1]
    todos[date] = todos[date].filter((todoObj) => {
      return todoObj.id !== id;
    });
    filterData[date] = filterData[date].filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ filterData: todos })
    window.localStorage.setItem('data', JSON.stringify(todos))
    this.setState({ todos: todos, filterData: filterData });
  };

  //search function
  searchTodo = (e) => {
    const val = e.target.value || '';
    const { todos, filterData } = this.state; 
    const date = window?.location?.search?.split("date=")[1]
    todos[date] = filterData[date].filter((todoObj) => {
      if (todoObj?.name?.indexOf(val) !== -1) {
        return todoObj;
      }
    });
    console.log(filterData[date])
    this.setState({ todos: todos });
  }

  //edit todo item
  editTodo = (id, q) => {
    const { todos, filterData } = this.state; 
    const date = window?.location?.search?.split("date=")[1]
    todos[date] = todos[date].map((todoObj) => {
      if (todoObj?.id == id) {
        todoObj.name = q;

      }
      return todoObj;
    });
    filterData[date] = filterData[date].map((todoObj) => {
      if (todoObj?.id == id) {
        todoObj.name = q;

      }
      return todoObj;
    });
    window.localStorage.setItem('data', JSON.stringify(todos))
    this.setState({ todos: todos, filterData: filterData });
  }
  render() {
    return (
      <div>
        <GlobalStyle />
        <StyleP>ToDos</StyleP>
        <div>
          <span>search</span>
          <input onChange={(e) => { this.searchTodo(e) }}></input>
        </div>
        <StyleDiv>
          <StyleTop>
            <Header addTodo={this.addTodo} />
            <List
              todos={this.state.todos}
              
              deleteTodo={this.deleteTodo}
              
              editTodo={this.editTodo}
            />
            <Footer todos={this.state.todos}  />
          </StyleTop>
          <StyleBottom>
            <div></div>
          </StyleBottom>
        </StyleDiv>
      </div>
    );
  }
}
