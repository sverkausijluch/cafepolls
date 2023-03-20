import React from 'react'
import axios from "axios"
import AnswerBlock from "./elements/AnswerBlock"

class RoomHeader extends React.Component {
	constructor(props) {
		super(props)
		this.openOptionsWin = this.openOptionsWin.bind(this)
		this.saveRoom = this.saveRoom.bind(this)
		this.state = {
			answer: {
				'text': '',
				'created_at': '',
				'author': {},
			},
		}
	}
	componentDidMount() {
		axios.get('http://'+window.location.host+'/api/room/' + this.props.id).then(room => {
			this.props.set_room(room.data)
		}).then(()=>{
			let answer = {
				'text': this.props.room.message,
				'created_at': this.props.room.created_at,
				'author': this.props.room.author,
			}
			this.setState({
				answer: answer
			})
		})
	}
	openOptionsWin = () => {
		let options_block = document.getElementById('options_block')
		if(options_block.classList.contains('hide')) {
			options_block.classList.remove('hide')
		} else {
			options_block.classList.add('hide')
		}
	}
	saveRoom = () => {
		let saved_status = this.props.room_saved
		let set_saved_status = (status) => {
			this.props.set_room_saved(status)
		}
		$.ajax({
			type: 'post',
			url: '../api/save-room/'+this.props.room.id,
			cache: false,
			data: {saved_status:saved_status},
			dataType: "json",
			success: function(data) {
				set_saved_status(data)
			},
			error: function(xhr){
				console.log(JSON.parse(xhr.responseText))
			}
		})
	}
	render() {
		return (
			<>
				<img src="https://wiki.guildwars2.com/images/7/7a/EoD_screenshot_16.jpg" className="room-cover-img" />
				<div className="room-tags">
					{this.props.room.tags.map((tag, index) => {
						return (
							<li key={index} className="tag">
								{tag.name}
							</li>
						)
					})}
				</div>
				<header className="room-header">
					<div className="room-info">
						<h2 className={this.props.room.color+'-text'}>{this.props.room.name}</h2>
						<div className="options">
							<div className="options-field">
								<div className="options-btn" onClick={this.openOptionsWin}>опции темы</div>
								<div className="options-block hide" id="options_block">
									<ul>
										<li onClick={this.saveRoom} className="underline-hover blue-text">{this.props.room_saved==1 ? 'сохранено' : 'в закладки'}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="answers">
					<AnswerBlock answer={this.state.answer} />
				</div>
			</>
		)
	}
}

export default RoomHeader