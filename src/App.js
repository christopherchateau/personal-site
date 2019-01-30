import React, { Component } from "react";
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
            <a
              href="https://github.com/christopherchateau/summit-register-FE"
              className="proj-1 proj"
            >
              <h4 className="summit-register-title">summit register</h4>
            </a>
            <a
              href="https://github.com/christopherchateau/marvelous"
              className="proj-2 proj"
            >
              <h4>MARVELOUS</h4>
            </a>
            <a
              href="https://github.com/christopherchateau/palette-picker"
              className="proj-3 proj"
            >
              <h4>palette picker</h4>
            </a>
            <a
              href="https://github.com/christopherchateau/movie-tracker"
              className="proj-4 proj"
            >
              <h4 className="coen-collection-title">coenCollection</h4>
            </a>
            <a
              href="https://github.com/christopherchateau/headcount2.0"
              className="proj-5 proj"
            >
              HEADCOUNT
            </a>
            <a
              href="https://github.com/christopherchateau/space-bunny"
              className="proj-6 proj"
            >
              SPACE BUNNY
            </a>
          </div>
        </section>
        <section className="me-section">
          <div className="headshot">
            <article className="text-area">
              <h4 className="me-text">
                <span className="hello-text">hello,</span>
                <br />
                <br />
                i'm a denver based front-end developer with an obsession for
                coding and an addiction to learning. i rely on a strong work
                ethic coupled with a passion for collaborating to create
                powerful, responsive websites.
              </h4>
            </article>
          </div>
          <div className="spotify" />
          <div className="contact" />
          {/* <img className="headshot" src={headshot} /> */}
        </section>
      </div>
    );
  }
}

export default App;
