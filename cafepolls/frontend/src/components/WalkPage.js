import React from 'react'

class WalkPage extends React.Component {
	constructor(props) {
		super(props)
		this.sendCode = this.sendCode.bind(this)
	}
	sendCode = (e) => {
		e.preventDefault()
		let code = document.getElementById('code_input').value
		let result = /^[*]{1,3}[0-9]{1,3}[*]{1,3}[a-z]{1,3}[*]{1,3}$/.test(code)
		if(result === true) {
			window.location.replace("../signup")
		} else {
			window.location.replace("../walk-page")
		}
	}
	render() {
	  return (
          <main className="registration-code-block">
			  <img src="https://sun9-14.userapi.com/impg/A0UMZn5Km8tiG3MHFUytW-8DDqia2OM2UCdBWA/jEfXjU0haKs.jpg?size=736x832&quality=95&sign=9ad8ec5c6e398084f55f4ac15e473429&type=album" className="walk-img" />
			  <p>Для прогулки хороша любая погода! Почему бы тебе не прогуляться?</p>
          </main>
	  )
	}
}

export default WalkPage
