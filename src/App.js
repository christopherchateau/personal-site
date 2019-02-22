import React, { Component } from "react";
import "./App.css";
import $ from "jquery";

class App extends Component {
  constructor() {
    super();
    this.state = { tooltipMessage: "copy to clipboard" };
  }

  componentDidMount = () => {
    $(window).scroll(() => {
      this.anchorLinks();
    });
  };

  anchorLinks = () => {
    $(window).scrollTop() > window.innerHeight * 0.9 && window.innerWidth > 970
      ? $(".links").addClass("anchor-links")
      : $(".links").removeClass("anchor-links");
  };

  copyToClipboard = () => {
    const copyText = this.refs.emailAddress;
    copyText.select();
    document.execCommand("copy");
    this.setState({ tooltipMessage: "you did it!" });
  };

  handleContactMouseLeave = () => {
    this.setState({ tooltipMessage: "copy to clipboard" });
  };

  render() {
    return (
      <div className="App">
        <section className="name-section">
          <nav className="links">
            <a
              href="https://github.com/christopherchateau"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/christopherchateau/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://www.codewars.com/users/christopherchateau"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code" />
            </a>
            <a
              href="https://open.spotify.com/user/22sqnzcvx3svvhpsxhlzodhji?si=qtjIs9klT-erRFdTIQR4TA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify" />
            </a>
          </nav>
          <div className="name">
            chris
            <br />
            chateau
          </div>
        </section>
        <section className="proj-section">
          <div className="proj-wrapper">
            <a
              href="https://github.com/christopherchateau/summit-register-FE"
              className="proj-summit-register proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>summit register</h4>
              <span className="proj-hover-text">
                reactJS
                <i class="fab fa-react" />
              </span>
            </a>
            <a
              href="https://github.com/christopherchateau/marvelous"
              className="proj-marvelous proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>MARVELOUS</h4>
              <span className="proj-hover-text">
                react - react router - redux
              </span>
            </a>
            <a
              href="https://github.com/christopherchateau/movie-tracker"
              className="proj-cc proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="cc-title">coenCollection</h4>
              <span className="proj-hover-text">
                react - react router - redux
              </span>
            </a>
            <a
              href="https://github.com/christopherchateau/BuildYourOwnBackend"
              className="proj-byobe proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Cerebral Brewing API</p>
              <span className="proj-hover-text">
                javascript - express - knex - postgreSQL
              </span>
            </a>
            <a
              href="https://github.com/christopherchateau/palette-picker"
              className="proj-pp proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>palette picker</h4>
              <span className="proj-hover-text">
                javascript - jquery - express
              </span>
            </a>
            <a
              href="https://github.com/christopherchateau/headcount2.0"
              className="proj-headcount proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>HEADCOUNT</h4>
              <span className="proj-hover-text">
                reactJS
                <i class="fab fa-react" />
              </span>
            </a>
            <a
              href="https://github.com/christopherchateau/SWAPI-Box"
              className="proj-swapi-box proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>SWAPi-Box $</h4>
              <span className="proj-hover-text">react - react router</span>
            </a>
            <a
              href="https://github.com/christopherchateau/space-bunny"
              className="proj-space-bunny proj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>SPACE BUNNY</h4>
              <span className="proj-hover-text">javascript - html canvas</span>
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
                ethic coupled with a passion for collaboration to create
                powerful, responsive websites.
                <br />
                <span className="hello-text">-chris</span>
              </h4>
            </article>
          </div>
          <div className="spotify">
            <header>currently in rotation</header>
            <section className="spotify-playlists">
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DXbrNmKPI2OlG"
                className="playlist playlist-1"
                target="_blank"
                rel="noopener noreferrer"
              />
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
                className="playlist playlist-2"
                target="_blank"
                rel="noopener noreferrer"
              />
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT"
                className="playlist playlist-3"
                target="_blank"
                rel="noopener noreferrer"
              />
              <a
                href="https://open.spotify.com/album/6oRuinkJdTge4hpTuClEF8"
                className="playlist playlist-4"
                target="_blank"
                rel="noopener noreferrer"
              />
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DWZMCPjHG57gq"
                className="playlist playlist-5"
                target="_blank"
                rel="noopener noreferrer"
              />
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9"
                className="playlist playlist-6"
                target="_blank"
                rel="noopener noreferrer"
              />
            </section>
          </div>
          <div
            className="contact"
            onMouseLeave={this.handleContactMouseLeave}
            onClick={this.copyToClipboard}
          >
            <span className="tooltip-text">{this.state.tooltipMessage}</span>
            <div className="e-mail-wrapper">
              <i className="fas fa-envelope" />
              <input
                className="e-mail"
                ref="emailAddress"
                type="text"
                value="christopherchateau@gmail.com"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
