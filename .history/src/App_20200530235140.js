import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";
export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("handleChange")
  };
  handleSubmit = (e) => {
    console.log("handleSubmit")
  };
  clearList = (e) =>{
    console.log("clearList")
  }
  handleDelete = (e) =>{
    console.log("handleDelete")
  }
  handleEdit = (e) =>{
    console.log(`edit ${}`)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}
