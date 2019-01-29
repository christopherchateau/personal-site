import React, { Component } from "react";
import headshot from "./images/headshot.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="name-section">
          chris
          <br />
          chateau
        </section>
        <section className="proj-section" />
        <section className="me-section">
          <img className="headshot" src={headshot} />
        </section>
      </div>
    );
  }
}

export default App;
