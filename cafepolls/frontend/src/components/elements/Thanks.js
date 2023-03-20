import React from 'react'

class Thanks extends React.Component {
	constructor(props) {
		super(props)
		this.sendThanks = this.sendThanks.bind(this)
	}
	sendThanks = () => {
		let openWebsocket = () => {
			let sendMsg = () => {
				let send_event = (data) => {
					let event_data = {
						'recipients': data.recipients,
						'object': data.object,
						'text': data.text,
						'sender': {'id':this.props.user.profile_id,'name':this.props.user.profile_name,'avatar':this.props.user.profile_avatar},
						'created_at': data.created_at,
						'type': 'thanks',
						'notif_type': data.type,
					}
					this['userSocket' + this.props.answer.author.id].send(JSON.stringify(event_data))
				}
				let closeWebsocket = () => {
					this['userSocket' + this.props.answer.author.id].close()
				}
				let ans_text = this.props.answer.text.substring(0, 5)
				let author = this.props.answer.author.id
				let room = this.props.answer.room
				let notification_data = {recipients:[author,],text:ans_text,type:0,object:room}
				$.ajax({
					type: 'post',
					url: 'http://'+window.location.host+'/api/add-notification',
					cache: false,
					data: notification_data,
					success: function (data) {
						let openWs = new Promise(function (resolve) {
							send_event(data)
							resolve()
						})
						openWs.then(closeWebsocket())
					},
					error: function (xhr, status, error) {
						console.log(JSON.parse(xhr.responseText))
					}
				})
			}
			this['userSocket' + this.props.answer.author.id] = new WebSocket(
				'ws://' + window.location.host + '/ws/user/' + this.props.answer.author.id)
			this['userSocket' + this.props.answer.author.id].onopen = function () {
				sendMsg()
			}
		}
		if(this.props.answer.author.id !== this.props.user.id) {
			openWebsocket()
		} else {
			alert("Пожалуйста!")
		}
	}
	render() {
		return (
			<div className="btn" onClick={this.sendThanks}>спасибо</div>
		)
	}
}

export default Thanks