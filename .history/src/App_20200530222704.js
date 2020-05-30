import React, { Component } from 'react';
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 bg-warning">hello</div>
          <div className="col-4 bg-danger">hello</div>
          <div className="col-4 bg-primary">hello</div>
        </div>
      </div>
    )
  }
}
