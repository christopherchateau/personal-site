import React, { Component } from "react";
import headshot from "./images/headshotBW.jpg";
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
        <section className="proj-section">
          <div className="proj-wrapper">
            <div className="proj-1 proj">
              <h4 className="summit-register-title">summit register</h4>
            </div>
            <div className="proj-2 proj">2</div>
            <div className="proj-3 proj">3</div>
            <div className="proj-4 proj">4</div>
            <div className="proj-5 proj">5</div>
            <div className="proj-6 proj">6</div>
          </div>
        </section>
        <section className="me-section">
          <img className="headshot" src={headshot} />
        </section>
      </div>
    );
  }
}

export default App;
