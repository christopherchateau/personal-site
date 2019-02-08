import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="name-section">
          <nav className="links">
            <a href="https://github.com/christopherchateau" target="_blank">
              <i class="fab fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/christopherchateau/"
              target="_blank"
            >
              <i class="fab fa-linkedin" />
            </a>
            <a
              href="https://www.codewars.com/users/christopherchateau"
              target="_blank"
            >
              <i class="fas fa-code" />
            </a>
            <a
              href="https://open.spotify.com/user/22sqnzcvx3svvhpsxhlzodhji?si=qtjIs9klT-erRFdTIQR4TA"
              target="_blank"
            >
              <i class="fab fa-spotify" />
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
            >
              <h4 className="proj-summit-register-title">summit register</h4>
            </a>
            <a
              href="https://github.com/christopherchateau/marvelous"
              className="proj-marvelous proj"
              target="_blank"
            >
              <h4>MARVELOUS</h4>
            </a>
            <a
              href="https://github.com/christopherchateau/palette-picker"
              className="proj-pp proj"
              target="_blank"
            >
              <h4>palette picker</h4>
            </a>
            <a
              href="https://github.com/christopherchateau/movie-tracker"
              className="proj-cc proj"
              target="_blank"
            >
              <h4 className="cc-title">coenCollection</h4>
            </a>
            <a
              href="https://github.com/christopherchateau/headcount2.0"
              className="proj-headcount proj"
              target="_blank"
            >
              HEADCOUNT
            </a>
            <a
              href="https://github.com/christopherchateau/space-bunny"
              className="proj-space-bunny proj"
              target="_blank"
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
                class="playlist playlist-1"
                target="_blank"
              />
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
                class="playlist playlist-2"
                target="_blank"
              />
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT"
                class="playlist playlist-3"
                target="_blank"
              />
              <a
                href="https://open.spotify.com/album/6oRuinkJdTge4hpTuClEF8"
                class="playlist playlist-4"
                target="_blank"
              />
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DWZMCPjHG57gq"
                class="playlist playlist-5"
                target="_blank"
              />
              <a
                href="https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9"
                class="playlist playlist-6"
                target="_blank"
              />
            </section>
          </div>
          <div className="contact">
            <button className="e-mail">
              <i class="fas fa-envelope" />
              christopherchateau@gmail.com
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
