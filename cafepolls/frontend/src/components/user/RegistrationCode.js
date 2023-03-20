import React from 'react'

class RegistrationCode extends React.Component {
	constructor(props) {
		super(props)
		this.sendCode = this.sendCode.bind(this)
	}
	sendCode = (e) => {
		e.preventDefault()
		let code = document.getElementById('code_input').value
		let result = /^[*]{1,3}[0-9]{1,3}[*]{1,3}[a-z]{1,3}[*]{1,3}$/.test(code)
		if(result === true) {
			localStorage.setItem('access_to_register', 'true')
			window.location.replace("../signup")
		} else {
			window.location.replace("../walk-page")
		}
	}
	render() {
	  return (
          <main className="registration-code-block">
			  <p className="textsmile">╰(´｡• ω •｡`)╯</p>
			  <p>Приветствуем! Чтобы перейти к регистрации, введите код, полученный в приглашении:</p>
			  <form onSubmit={this.sendCode}>
			 	 <input type="text" id="code_input" placeholder="*****" />
			  	<button>Вперёд</button>
			  </form>
			  <p className="test-res"></p>
          </main>
	  )
	}
}

export default RegistrationCode
