import React from 'react'
import AnswerForm from './forms/AnswerForm'
import TextEditor from './elements/TextEditor'

class RoomForm extends React.Component {
	constructor(props) {
		super(props)
		this.sendEvent = this.sendEvent.bind(this)
	}
	componentDidMount(){
		this.roomSocket = new WebSocket(
				'ws://'+window.location.host+'/ws/room/'+this.props.room_id)
		this.roomSocket.onopen =()=>{console.log('открыт сокет комнаты')}
		this.roomSocket.onclose =(error)=>{console.log(error)}
	}
	sendEvent = () => {
		alert(1)
	}
	render() {
		return (
      		<div className="answer-input">
				<TextEditor content="answer" />
				<AnswerForm room_id={this.props.room_id} socket_event={this.sendEvent}>
				</AnswerForm>
	  		</div>
		)
	}
}

export default RoomForm