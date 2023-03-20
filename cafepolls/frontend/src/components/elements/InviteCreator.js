import React from 'react'
const RandExp = require('randexp')

class InviteCreator extends React.Component {
	constructor(props) {
		super(props)
		this.getInviteMsg = this.getInviteMsg.bind(this)
	}
	getInviteMsg = () => {
		let msg_gen = () => {
			let code_word = ''
			code_word = new RandExp(/^[*]{1,3}[0-9]{1,3}[*]{1,3}[a-z]{1,3}[*]{1,3}$/).gen()
			return code_word
		}
		const code_word = msg_gen()
		const invite_text = 'Делюсь ссылкой http://127.0.0.1:8000/hello-i-invite-you и кодом '+code_word+'. С Наилучшими Пожеланиями!'
		window.prompt("Текст приглашения: ", invite_text)
	}
	render() {
	  return (
          <div className="invite-create-block">
		  	<button onClick={this.getInviteMsg}>Создать приглашение</button>
			  <p className="genereted-msg" id="genereted_msg"></p>
          </div>
	  )
	}
}

export default InviteCreator
