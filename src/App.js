import React, { Component } from 'react'
import $ from 'jquery'

import Link from './components/Link.js'
import bballImg from '../src/images/bball.png'
import atitlanImg from '../src/images/atitlan.jpg'

import './App.css'

export default class App extends Component {
	state = {
		colors: [],
		offset: 0,
		tooltipMessage: 'copy to clipboard'
	}

	componentDidMount = () => {
		this.generateColors()

		setTimeout(() => {
			this.displayAtitlanBackground()
		}, 2000)

		setTimeout(() => {
			this.blinkingText()
		}, 6000)

		$(window).scroll(() => {
			this.anchorLinks()
			this.updatePageOffset()
		})
	}

	displayAtitlanBackground = () => {
		$('.name-section').addClass('name-section-atitlan-bg')
		$('.name-section-atitlan-bg').css({
			'background-image': `url(${atitlanImg})`
		})
		$('.links').removeClass('hidden')
	}

	anchorLinks = () =>
		$(window).scrollTop() > window.innerHeight * 0.9 &&
		window.innerWidth > 970
			? $('.links').addClass('anchor-links')
			: $('.links').removeClass('anchor-links')

	updatePageOffset = () => this.setState({ offset: window.pageYOffset })

	blinkingText = () => {
		$('.chateaU').addClass('blink')

		setTimeout(() => {
			$('.chateaU').removeClass('blink')
		}, 900)
		setTimeout(() => {
			this.blinkingText()
		}, 1600)
	}

	handleEmailClick = () => {
		$('.e-mail-wrapper, .e-mail').addClass('e-mail-clicked')
		this.copyToClipboard()
	}

	handleContactMouseLeave = () => {
		$('.e-mail-wrapper, .e-mail').removeClass('e-mail-clicked')
		this.setState({ tooltipMessage: 'copy to clipboard' })
	}

	copyToClipboard = () => {
		const copyText = this.refs.emailAddress

		copyText.select()
		document.execCommand('copy')

		this.setState({ tooltipMessage: 'you did it!' })
	}

	generateColors() {
		let colors = []

		while (colors.length < 5) {
			colors.push(this.generateRandomHexCode())
		}
		this.setState({ colors })

		setTimeout(() => {
			this.generateColors()
		}, 4000)
	}

	generateRandomHexCode() {
		let hexCode = '#'

		while (hexCode.length < 7) {
			hexCode += this.generateRandomHexValue()
		}
		return hexCode
	}

	generateRandomHexValue() {
		const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
		const randomIndex = Math.floor(Math.random() * 16)
		return values[randomIndex]
	}

	render = () => (
		<div className='App'>
			<section
				className='name-section'
				style={{
					backgroundPositionY: this.state.offset / 1.8
				}}
			>
				<nav className='links hidden'>
					<Link
						href='github.com/christopherchateau'
						linkClasses={['fab', 'slide', 'fa-github']}
					/>
					<Link
						href='linkedin.com/in/christopherchateau/'
						linkClasses={['fab', 'slide', 'fa-linkedin']}
					/>
					<Link
						href='open.spotify.com/user/22sqnzcvx3svvhpsxhlzodhji?si=qtjIs9klT-erRFdTIQR4TA'
						linkClasses={['fab', 'slide', 'fa-spotify']}
					/>
				</nav>
				<div
					className='name'
					style={{
						bottom: this.state.offset / 3,
						opacity: 0.6 - this.state.offset * 0.001
					}}
				>
					<h1>chris</h1>
					<h1>
						chatea<span className='chateaU'>u</span>
					</h1>
				</div>
			</section>
			<section className='proj-section'>
				<article className='proj-title'>
					<h2>projects</h2>
				</article>
				<div className='proj-wrapper'>
					<Link
						href='github.com/christopherchateau/long-shot-league'
						linkClasses={['proj-long-shot-league', 'proj']}
					>
						<p className='proj-long-shot-league-update'>
							updated in 2020
						</p>
						<h4>
							LONG SH
							<img className='bball-img' src={bballImg} alt='O' />
							T LEAGUE
						</h4>
						<span className='proj-hover-text'>
							reactJS - express - knex - postgreSQL
						</span>
					</Link>
					<Link
						href='github.com/christopherchateau/summit-register-FE'
						linkClasses={['proj-summit-register', 'proj']}
					>
						<h4>summit register</h4>
						<span className='proj-hover-text'>
							reactJS
							<i className='fab fa-react' />
						</span>
					</Link>
					<Link
						href='github.com/christopherchateau/marvelous'
						linkClasses={['proj-marvelous', 'proj']}
					>
						<h4>MARVELOUS</h4>
						<span className='proj-hover-text'>
							reactJS - react router - redux
						</span>
					</Link>
					<Link
						href='github.com/christopherchateau/BuildYourOwnBackend'
						linkClasses={['proj-byobe', 'proj']}
					>
						<p>Cerebral Brewing API</p>
						<span className='proj-hover-text'>
							javascript - express - knex - postgreSQL
						</span>
					</Link>
					<Link
						href='github.com/christopherchateau/movie-tracker'
						linkClasses={['proj-cc', 'proj']}
					>
						<h4 className='cc-title'>coenCollection</h4>
						<span className='proj-hover-text'>
							reactJS - react router - redux
						</span>
					</Link>
					<Link
						href='github.com/christopherchateau/palette-picker'
						linkClasses={['proj-pp']}
					>
						<div className='proj-pp-colors-wrapper proj'>
							<h3 className='pp-title'>palette picker</h3>
							<span className='proj-hover-text'>
								jQuery - express - knex - postgreSQL
							</span>
							<section
								className='proj-pp-color-1 color'
								style={{
									background: `${this.state.colors[0]}`
								}}
							/>
							<section
								className='proj-pp-color-2 color'
								style={{
									background: `${this.state.colors[1]}`
								}}
							/>
							<section
								className='proj-pp-color-3 color'
								style={{
									background: `${this.state.colors[2]}`
								}}
							/>
							<section
								className='proj-pp-color-4 color'
								style={{
									background: `${this.state.colors[3]}`
								}}
							/>
							<section
								className='proj-pp-color-5 color'
								style={{
									background: `${this.state.colors[4]}`
								}}
							/>
						</div>
					</Link>
					<Link
						href='github.com/christopherchateau/headcount2.0'
						linkClasses={['proj-headcount', 'proj']}
					>
						<h4>HEADCOUNT</h4>
						<span className='proj-hover-text'>
							reactJS
							<i className='fab fa-react' />
						</span>
					</Link>
					<Link
						href='github.com/christopherchateau/SWAPI-Box'
						linkClasses={['proj-swapi-box', 'proj']}
					>
						<h4>SWAPi-Box $</h4>
						<span className='proj-hover-text'>
							reactJS - react router
						</span>
					</Link>
					<Link
						href='github.com/christopherchateau/space-bunny'
						linkClasses={['proj-space-bunny', 'proj']}
					>
						<h4>SPACE BUNNY</h4>
						<span className='proj-hover-text'>
							javascript - html canvas
						</span>
					</Link>
				</div>
				<article className='challenges-title'>
					<h2>code challenges</h2>
				</article>
				<div className='challenges-wrapper'>
					<Link
						href='exercism.io/profiles/christopherchateau'
						linkClasses={['challenge-exercism', 'challenge']}
					/>

					<Link
						href='www.codewars.com/users/christopherchateau'
						linkClasses={['challenge-cw', 'challenge']}
					>
						<div className='challenge-cw-interior'>
							<h4>code wars</h4>
							<img
								className='cw-banner'
								src='https://www.codewars.com/users/christopherchateau/badges/micro'
								alt='code wars'
							/>
						</div>
					</Link>
				</div>
			</section>
			<section className='me-section'>
				<div className='headshot'>
					<h4 className='me-text'>
						cycling
						<br />
						snowboarding
						<br />
						coding
						<br />
					</h4>
				</div>
				<div className='spotify'>
					<header>currently in rotation</header>
					<section className='spotify-playlists'>
						<Link
							href='open.spotify.com/playlist/37i9dQZF1DXbrNmKPI2OlG'
							linkClasses={['playlist', 'playlist-1']}
						/>
						<Link
							href='open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS'
							linkClasses={['playlist', 'playlist-2']}
						/>
						<Link
							href='open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT'
							linkClasses={['playlist', 'playlist-3']}
						/>
						<Link
							href='open.spotify.com/album/6oRuinkJdTge4hpTuClEF8'
							linkClasses={['playlist', 'playlist-4']}
						/>
						<Link
							href='open.spotify.com/album/4anxEzh8xEKSPXKHGWiFue'
							linkClasses={['playlist', 'playlist-5']}
						/>
						<Link
							href='open.spotify.com/album/0YF8PfcGbsKg5IaFyPnlyY'
							linkClasses={['playlist', 'playlist-6']}
						/>
					</section>
				</div>
				<div
					className='contact'
					onMouseLeave={this.handleContactMouseLeave}
					onClick={this.handleEmailClick}
				>
					<span className='tooltip-text'>
						{this.state.tooltipMessage}
					</span>
					<div className='e-mail-wrapper'>
						<i className='fas fa-envelope' />
						<input
							className='e-mail'
							ref='emailAddress'
							type='text'
							value='christopherchateau@gmail.com'
						/>
					</div>
				</div>
			</section>
		</div>
	)
}
