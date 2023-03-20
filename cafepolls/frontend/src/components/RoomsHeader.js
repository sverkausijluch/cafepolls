import React from 'react'

class RoomsHeader extends React.Component {
	constructor(props) {
		super(props)
		this.selectSection = this.selectSection.bind(this)
		this.openCreateRoomWindow = this.openCreateRoomWindow.bind(this)
	}
	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.new_rooms_count !== this.props.new_rooms_count) {
			if (typeof this.newroomsSocket !== 'undefined') {
				this.newroomsSocket.send(JSON.stringify({
					'is_new_room': 1,
				}))
			}
		}
	}
	openCreateRoomWindow = (e) => {
		this.props.set_window('createroom')
		document.querySelector('body').style.overflow = 'hidden'
	}
	selectSection = (e) => {
		let section_id = e.target.getAttribute('data-section')
		let new_rooms_msg_block = document.getElementById('new_rooms_msg_block')
		if(!new_rooms_msg_block.classList.contains('hide')){
			new_rooms_msg_block.classList.add('hide')
		}
		document.getElementById('room_selected_input').value = section_id
		document.querySelectorAll('#rooms_toggle .line').forEach(line => line.classList.add('hide'))
		e.target.querySelector('.line').classList.remove('hide')
		this.props.set_room_section(section_id)
		if(section_id == 2) {
			if (typeof this.newroomsSocket == 'undefined') {
				this.newroomsSocket = new WebSocket(
					'ws://' + window.location.host + '/ws/newrooms/')
			}
			this.newroomsSocket.onmessage = () => {
				let new_rooms_msg_block = document.getElementById('new_rooms_msg_block')
				if (new_rooms_msg_block.classList.contains('hide')) {
					new_rooms_msg_block.classList.remove('hide')
				}
			}
		}
	}
	render() {
	  return (
		  <div className="block-title">
			  <h3><img src="https://cdn-icons-png.flaticon.com/512/6961/6961057.png" className="small-icon" />Комнаты</h3>
			  <div className="add-btn" onClick={this.openCreateRoomWindow}>
				  Добавить
			  </div>
			  <ul className="toggle" id="rooms_toggle">
				  <li className="active" onClick={this.selectSection} data-section="1">популярное
					  <div className="line"></div>
				  </li>
				  <li onClick={this.selectSection} data-section="2">новое
					  <div className="line hide"></div>
				  </li>
				  <li onClick={this.selectSection} data-section="4">сохраненное
					  <div className="line hide"></div>
				  </li>
			  </ul>
			  <input className="hide" type="number" defaultValue="1" id="room_selected_input" />
		  </div>
	  )
	}
}

export default RoomsHeader
