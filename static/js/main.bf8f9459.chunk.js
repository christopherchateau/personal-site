(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(3),s=t.n(n),o=(t(15),t(4)),c=t(5),i=t(7),m=t(6),p=t(8),h=(t(17),t(1)),u=t.n(h),f=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).componentDidMount=function(){u()(window).scroll(function(){e.anchorLinks(),e.updatePageOffset()})},e.anchorLinks=function(){u()(window).scrollTop()>.9*window.innerHeight&&window.innerWidth>970?u()(".links").addClass("anchor-links"):u()(".links").removeClass("anchor-links")},e.updatePageOffset=function(){e.setState({offset:window.pageYOffset})},e.handleEmailClick=function(){e.toggleEmailDisplay(),e.copyToClipboard()},e.copyToClipboard=function(){e.refs.emailAddress.select(),document.execCommand("copy"),e.setState({tooltipMessage:"you did it!"})},e.handleContactMouseLeave=function(){e.toggleEmailDisplay(),e.setState({tooltipMessage:"copy to clipboard"})},e.toggleEmailDisplay=function(){u()(".e-mail").hasClass("e-mail-clicked")?u()(".e-mail-wrapper, .e-mail").removeClass("e-mail-clicked"):u()(".e-mail-wrapper, .e-mail").addClass("e-mail-clicked")},e.state={tooltipMessage:"copy to clipboard",offset:0},e}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("section",{className:"name-section"},l.a.createElement("nav",{className:"links"},l.a.createElement("a",{href:"https://github.com/christopherchateau",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:"https://linkedin.com/in/christopherchateau/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{href:"https://open.spotify.com/user/22sqnzcvx3svvhpsxhlzodhji?si=qtjIs9klT-erRFdTIQR4TA",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-spotify"}))),l.a.createElement("div",{className:"name",style:{bottom:this.state.offset/3,opacity:.6-.001*this.state.offset}},"chris",l.a.createElement("br",null),"chateau")),l.a.createElement("section",{className:"proj-section"},l.a.createElement("article",{className:"proj-title"},l.a.createElement("h2",null,"projects")),l.a.createElement("div",{className:"proj-wrapper"},l.a.createElement("a",{href:"https://github.com/christopherchateau/summit-register-FE",className:"proj-summit-register proj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",null,"summit register"),l.a.createElement("span",{className:"proj-hover-text"},"reactJS",l.a.createElement("i",{class:"fab fa-react"}))),l.a.createElement("a",{href:"https://github.com/christopherchateau/marvelous",className:"proj-marvelous proj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",null,"MARVELOUS"),l.a.createElement("span",{className:"proj-hover-text"},"reactJS - react router - redux")),l.a.createElement("a",{href:"https://github.com/christopherchateau/movie-tracker",className:"proj-cc proj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",{className:"cc-title"},"coenCollection"),l.a.createElement("span",{className:"proj-hover-text"},"reactJS - react router - redux")),l.a.createElement("a",{href:"https://github.com/christopherchateau/BuildYourOwnBackend",className:"proj-byobe proj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("p",null,"Cerebral Brewing API"),l.a.createElement("span",{className:"proj-hover-text"},"javascript - express - knex - postgreSQL")),l.a.createElement("a",{href:"https://github.com/christopherchateau/palette-picker",className:"proj-pp proj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",null,"palette picker"),l.a.createElement("span",{className:"proj-hover-text"},"jQuery - express - knex - postgreSQL")),l.a.createElement("a",{href:"https://github.com/christopherchateau/headcount2.0",className:"proj-headcount proj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",null,"HEADCOUNT"),l.a.createElement("span",{className:"proj-hover-text"},"reactJS",l.a.createElement("i",{class:"fab fa-react"}))),l.a.createElement("a",{href:"https://github.com/christopherchateau/SWAPI-Box",className:"proj-swapi-box proj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",null,"SWAPi-Box $"),l.a.createElement("span",{className:"proj-hover-text"},"reactJS - react router")),l.a.createElement("a",{href:"https://github.com/christopherchateau/space-bunny",className:"proj-space-bunny proj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",null,"SPACE BUNNY"),l.a.createElement("span",{className:"proj-hover-text"},"javascript - html canvas"))),l.a.createElement("article",{className:"challenges-title"},l.a.createElement("h2",null,"code challenges")),l.a.createElement("div",{className:"challenges-wrapper"},l.a.createElement("a",{href:"https://exercism.io/profiles/christopherchateau",className:"challenge-exercism challenge",target:"_blank",rel:"noopener noreferrer"}),l.a.createElement("a",{href:"https://www.codewars.com/users/christopherchateau",className:"challenge-cw challenge",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"challenge-cw-interior"},l.a.createElement("h4",null,"code wars"),l.a.createElement("img",{className:"cw-banner",src:"https://www.codewars.com/users/christopherchateau/badges/micro"}))))),l.a.createElement("section",{className:"me-section"},l.a.createElement("div",{className:"headshot"},l.a.createElement("article",{className:"text-area"},l.a.createElement("h4",{className:"me-text"},l.a.createElement("span",{className:"hello-text"},"hello,"),l.a.createElement("br",null),l.a.createElement("br",null),"i'm a denver based front-end developer with an obsession for coding and an addiction to learning. i rely on a strong work ethic coupled with a passion for collaboration to create powerful, responsive websites.",l.a.createElement("br",null),l.a.createElement("span",{className:"hello-text"},"-chris")))),l.a.createElement("div",{className:"spotify"},l.a.createElement("header",null,"currently in rotation"),l.a.createElement("section",{className:"spotify-playlists"},l.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DXbrNmKPI2OlG",className:"playlist playlist-1",target:"_blank",rel:"noopener noreferrer"}),l.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS",className:"playlist playlist-2",target:"_blank",rel:"noopener noreferrer"}),l.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT",className:"playlist playlist-3",target:"_blank",rel:"noopener noreferrer"}),l.a.createElement("a",{href:"https://open.spotify.com/album/6oRuinkJdTge4hpTuClEF8",className:"playlist playlist-4",target:"_blank",rel:"noopener noreferrer"}),l.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DWZMCPjHG57gq",className:"playlist playlist-5",target:"_blank",rel:"noopener noreferrer"}),l.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9",className:"playlist playlist-6",target:"_blank",rel:"noopener noreferrer"}))),l.a.createElement("div",{className:"contact",onMouseLeave:this.handleContactMouseLeave,onClick:this.handleEmailClick},l.a.createElement("span",{className:"tooltip-text"},this.state.tooltipMessage),l.a.createElement("div",{className:"e-mail-wrapper"},l.a.createElement("i",{className:"fas fa-envelope"}),l.a.createElement("input",{className:"e-mail",ref:"emailAddress",type:"text",value:"christopherchateau@gmail.com"})))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(27)}},[[9,2,1]]]);
//# sourceMappingURL=main.bf8f9459.chunk.js.map