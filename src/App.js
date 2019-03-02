import React, { Component } from "react";
import "./App.css";
import $ from "jquery";

class App extends Component {
  constructor() {
    super();
    this.state = { tooltipMessage: "copy to clipboard", offset: 0 };
  }

  componentDidMount = () => {
    $(window).scroll(() => {
      this.anchorLinks();
      this.updatePageOffset();
    });
  };

  anchorLinks = () => {
    $(window).scrollTop() > window.innerHeight * 0.9 && window.innerWidth > 970
      ? $(".links").addClass("anchor-links")
      : $(".links").removeClass("anchor-links");
  };

  updatePageOffset = () => {
    this.setState({ offset: window.pageYOffset });
  };

  handleEmailClick = () => {
    $(".e-mail-wrapper, .e-mail").addClass("e-mail-clicked");
    this.copyToClipboard();
  };

  handleContactMouseLeave = () => {
    $(".e-mail-wrapper, .e-mail").removeClass("e-mail-clicked");
    this.setState({ tooltipMessage: "copy to clipboard" });
  };

  copyToClipboard = () => {
    const copyText = this.refs.emailAddress;
    copyText.select();
    document.execCommand("copy");
    this.setState({ tooltipMessage: "you did it!" });
  };

  generateRandomHexValue() {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    const randomIndex = Math.floor(Math.random() * 16);
    return values[randomIndex];
  }

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
              href="https://open.spotify.com/user/22sqnzcvx3svvhpsxhlzodhji?si=qtjIs9klT-erRFdTIQR4TA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-spotify" />
            </a>
          </nav>
          <div
            className="name"
            style={{
              bottom: this.state.offset / 3,
              opacity: 0.6 - this.state.offset * 0.001
            }}
          >
            chris
            <br />
            chateau
          </div>
        </section>
        <section className="proj-section">
          <article className="proj-title">
            <h2>projects</h2>
          </article>
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
                reactJS - react router - redux
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
                reactJS - react router - redux
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
              className="proj-pp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="proj-pp-colors-wrapper proj">
                <h3 className="pp-title">palette picker</h3>
                <span className="proj-hover-text">
                  jQuery - express - knex - postgreSQL
                </span>
                <section className="proj-pp-color-1 color" />
                <section className="proj-pp-color-2 color" />
                <section className="proj-pp-color-3 color" />
                <section className="proj-pp-color-4 color" />
                <section className="proj-pp-color-5 color" />
              </div>
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
              <span className="proj-hover-text">reactJS - react router</span>
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
          <article className="challenges-title">
            <h2>code challenges</h2>
          </article>
          <div className="challenges-wrapper">
            <a
              href="https://exercism.io/profiles/christopherchateau"
              className="challenge-exercism challenge"
              target="_blank"
              rel="noopener noreferrer"
            />

            <a
              href="https://www.codewars.com/users/christopherchateau"
              className="challenge-cw challenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="challenge-cw-interior">
                <h4>code wars</h4>
                <img
                  className="cw-banner"
                  src="https://www.codewars.com/users/christopherchateau/badges/micro"
                />
              </div>
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
            onClick={this.handleEmailClick}
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
