(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(28)},16:function(e,a,t){},18:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(3),o=t.n(l),s=(t(16),t(4)),c=t(5),i=t(8),m=t(6),p=t(9),h=t(7),u=t.n(h),f=(t(18),t(1)),d=t.n(f),E=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).componentDidMount=function(){e.generateColors(),setTimeout(function(){e.blinkingText()},3500),d()(window).scroll(function(){e.anchorLinks(),e.updatePageOffset()})},e.anchorLinks=function(){d()(window).scrollTop()>.9*window.innerHeight&&window.innerWidth>970?d()(".links").addClass("anchor-links"):d()(".links").removeClass("anchor-links")},e.updatePageOffset=function(){e.setState({offset:window.pageYOffset})},e.blinkingText=function(){d()(".chateaU").addClass("blink"),setTimeout(function(){d()(".chateaU").removeClass("blink")},900),setTimeout(function(){e.blinkingText()},1600)},e.handleEmailClick=function(){d()(".e-mail-wrapper, .e-mail").addClass("e-mail-clicked"),e.copyToClipboard()},e.handleContactMouseLeave=function(){d()(".e-mail-wrapper, .e-mail").removeClass("e-mail-clicked"),e.setState({tooltipMessage:"copy to clipboard"})},e.copyToClipboard=function(){e.refs.emailAddress.select(),document.execCommand("copy"),e.setState({tooltipMessage:"you did it!"})},e.state={colors:[],offset:0,tooltipMessage:"copy to clipboard"},e}return Object(p.a)(a,e),Object(c.a)(a,[{key:"generateColors",value:function(){for(var e=this,a=[];a.length<5;)a.push(this.generateRandomHexCode());this.setState({colors:a}),setTimeout(function(){e.generateColors()},4e3)}},{key:"generateRandomHexCode",value:function(){for(var e="#";e.length<7;)e+=this.generateRandomHexValue();return e}},{key:"generateRandomHexValue",value:function(){return[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"][Math.floor(16*Math.random())]}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("section",{className:"name-section"},n.a.createElement("nav",{className:"links"},n.a.createElement("a",{href:"https://github.com/christopherchateau",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-github"})),n.a.createElement("a",{href:"https://linkedin.com/in/christopherchateau/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-linkedin"})),n.a.createElement("a",{href:"https://open.spotify.com/user/22sqnzcvx3svvhpsxhlzodhji?si=qtjIs9klT-erRFdTIQR4TA",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-spotify"}))),n.a.createElement("div",{className:"name",style:{bottom:this.state.offset/3,opacity:.6-.001*this.state.offset}},n.a.createElement("h1",null,"chris"),n.a.createElement("h1",null,"chatea",n.a.createElement("span",{className:"chateaU"},"u")))),n.a.createElement("section",{className:"proj-section"},n.a.createElement("article",{className:"proj-title"},n.a.createElement("h2",null,"projects")),n.a.createElement("div",{className:"proj-wrapper"},n.a.createElement("a",{href:"https://github.com/christopherchateau/summit-register-FE",className:"proj-summit-register proj",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h4",null,"summit register"),n.a.createElement("span",{className:"proj-hover-text"},"reactJS",n.a.createElement("i",{class:"fab fa-react"}))),n.a.createElement("a",{href:"https://github.com/christopherchateau/marvelous",className:"proj-marvelous proj",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h4",null,"MARVELOUS"),n.a.createElement("span",{className:"proj-hover-text"},"reactJS - react router - redux")),n.a.createElement("a",{href:"https://github.com/christopherchateau/long-shot-league",className:"proj-long-shot-league proj",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h4",null,"LONG SH",n.a.createElement("img",{className:"bball-img",src:u.a,alt:"O"}),"T LEAGUE"),n.a.createElement("span",{className:"proj-hover-text"},"reactJS - express js - knex - postgreSQL")),n.a.createElement("a",{href:"https://github.com/christopherchateau/BuildYourOwnBackend",className:"proj-byobe proj",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("p",null,"Cerebral Brewing API"),n.a.createElement("span",{className:"proj-hover-text"},"javascript - express - knex - postgreSQL")),n.a.createElement("a",{href:"https://github.com/christopherchateau/movie-tracker",className:"proj-cc proj",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h4",{className:"cc-title"},"coenCollection"),n.a.createElement("span",{className:"proj-hover-text"},"reactJS - react router - redux")),n.a.createElement("a",{href:"https://github.com/christopherchateau/palette-picker",className:"proj-pp",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"proj-pp-colors-wrapper proj"},n.a.createElement("h3",{className:"pp-title"},"palette picker"),n.a.createElement("span",{className:"proj-hover-text"},"jQuery - express - knex - postgreSQL"),n.a.createElement("section",{className:"proj-pp-color-1 color",style:{background:"".concat(this.state.colors[0])}}),n.a.createElement("section",{className:"proj-pp-color-2 color",style:{background:"".concat(this.state.colors[1])}}),n.a.createElement("section",{className:"proj-pp-color-3 color",style:{background:"".concat(this.state.colors[2])}}),n.a.createElement("section",{className:"proj-pp-color-4 color",style:{background:"".concat(this.state.colors[3])}}),n.a.createElement("section",{className:"proj-pp-color-5 color",style:{background:"".concat(this.state.colors[4])}}))),n.a.createElement("a",{href:"https://github.com/christopherchateau/headcount2.0",className:"proj-headcount proj",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h4",null,"HEADCOUNT"),n.a.createElement("span",{className:"proj-hover-text"},"reactJS",n.a.createElement("i",{class:"fab fa-react"}))),n.a.createElement("a",{href:"https://github.com/christopherchateau/SWAPI-Box",className:"proj-swapi-box proj",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h4",null,"SWAPi-Box $"),n.a.createElement("span",{className:"proj-hover-text"},"reactJS - react router")),n.a.createElement("a",{href:"https://github.com/christopherchateau/space-bunny",className:"proj-space-bunny proj",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("h4",null,"SPACE BUNNY"),n.a.createElement("span",{className:"proj-hover-text"},"javascript - html canvas"))),n.a.createElement("article",{className:"challenges-title"},n.a.createElement("h2",null,"code challenges")),n.a.createElement("div",{className:"challenges-wrapper"},n.a.createElement("a",{href:"https://exercism.io/profiles/christopherchateau",className:"challenge-exercism challenge",target:"_blank",rel:"noopener noreferrer"}),n.a.createElement("a",{href:"https://www.codewars.com/users/christopherchateau",className:"challenge-cw challenge",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"challenge-cw-interior"},n.a.createElement("h4",null,"code wars"),n.a.createElement("img",{className:"cw-banner",src:"https://www.codewars.com/users/christopherchateau/badges/micro"}))))),n.a.createElement("section",{className:"me-section"},n.a.createElement("div",{className:"headshot"},n.a.createElement("article",{className:"text-area"},n.a.createElement("h4",{className:"me-text"},n.a.createElement("span",{className:"hello-text"},"hello,"),n.a.createElement("br",null),n.a.createElement("br",null),"i'm a denver based front-end developer with an obsession for coding and an addiction to learning. i rely on a strong work ethic coupled with a passion for collaboration to create powerful, responsive websites.",n.a.createElement("br",null),n.a.createElement("span",{className:"hello-text"},"-chris")))),n.a.createElement("div",{className:"spotify"},n.a.createElement("header",null,"currently in rotation"),n.a.createElement("section",{className:"spotify-playlists"},n.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DXbrNmKPI2OlG",className:"playlist playlist-1",target:"_blank",rel:"noopener noreferrer"}),n.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS",className:"playlist playlist-2",target:"_blank",rel:"noopener noreferrer"}),n.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT",className:"playlist playlist-3",target:"_blank",rel:"noopener noreferrer"}),n.a.createElement("a",{href:"https://open.spotify.com/album/6oRuinkJdTge4hpTuClEF8",className:"playlist playlist-4",target:"_blank",rel:"noopener noreferrer"}),n.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DWZMCPjHG57gq",className:"playlist playlist-5",target:"_blank",rel:"noopener noreferrer"}),n.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9",className:"playlist playlist-6",target:"_blank",rel:"noopener noreferrer"}))),n.a.createElement("div",{className:"contact",onMouseLeave:this.handleContactMouseLeave,onClick:this.handleEmailClick},n.a.createElement("span",{className:"tooltip-text"},this.state.tooltipMessage),n.a.createElement("div",{className:"e-mail-wrapper"},n.a.createElement("i",{className:"fas fa-envelope"}),n.a.createElement("input",{className:"e-mail",ref:"emailAddress",type:"text",value:"christopherchateau@gmail.com"})))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,a,t){e.exports=t.p+"static/media/bball.06ac701f.png"}},[[10,2,1]]]);
//# sourceMappingURL=main.f6336842.chunk.js.map