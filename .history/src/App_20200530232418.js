import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";
export default class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" },
  ],
  };
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
