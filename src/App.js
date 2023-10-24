import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Invoices from "./components/Invoices";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Invoices />
      </div>
    );
  }
}

export default App;
