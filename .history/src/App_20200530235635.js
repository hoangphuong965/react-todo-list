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
  handleDelete = (id) =>{
    console.log(`delete ${id}`)
  }
  handleEdit = (id) =>{
    console.log(`edit ${id}`)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5"></div>
        </div>
      </div>
    );
  }
}
