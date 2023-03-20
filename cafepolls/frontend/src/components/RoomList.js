import React from 'react'
import { Link } from "react-router-dom"

class RoomList extends React.Component {
	constructor(props) {
		super(props)
		this.getRoomList = this.getRoomList.bind(this)
		this.roomSearch = this.roomSearch.bind(this)
		this.showMoreRooms = this.showMoreRooms.bind(this)
	}
	componentDidMount() {
		this.getRoomList([])
	}
	componentWillReceiveProps(nextProps, nextContext) {
		if(nextProps.room_tags !== this.props.room_tags) {
			document.getElementById('room_list').setAttribute('data-count',0)
			this.getRoomList(nextProps.room_tags, this.props.room_section)
		}
		if(nextProps.room_section !== this.props.room_section) {
			document.getElementById('room_list').setAttribute('data-count',0)
			this.getRoomList(this.props.room_tags, nextProps.room_section)
		}
	}
	roomSearch = () => {
		document.getElementById('room_list').setAttribute('data-count',0)
		this.getRoomList(this.props.room_tags, this.props.room_section)
	}
	getRoomList = (tags = [], section = 1) => {
		let rooms_count = Number(document.getElementById('room_list').getAttribute('data-count'))
		let set_room_list = (rooms,list_length) => {
			if(rooms_count == 0) {
				this.props.set_rooms(rooms)
			} else {
				this.props.set_rooms(this.props.rooms.concat(rooms))
			}
			if (list_length<10) {
				document.getElementById('show_more_rooms').classList.add('hide')
			} else {
				document.getElementById('show_more_rooms').classList.remove('hide')
			}
			document.getElementById('room_list').setAttribute('data-count',rooms_count+list_length)
		}
		let search_str = document.getElementById('room_search_input').value
		let data = {tags: tags, search_str: search_str, section: section, showed_rooms_count: rooms_count}
		$.ajax({
			type: 'post',
			url: '../api/get-rooms-list',
			cache: false,
			data: data,
			success: function (data) {
				set_room_list(data.rooms, data.rooms_count)
			},
			error: function (xhr, status, error) {
				console.log(JSON.parse(xhr.responseText))
			}
		})
	}
	showMoreRooms = () => {
		this.getRoomList(this.props.room_tags, this.props.room_section)
	}
	render() {
	  return (
		  <div className="col2">
						<div className="section-search-block">
							<i className="el-icon-search icon"></i>
							<input className="section-search" placeholder="Ищем конфеты с малиной" id="room_search_input" onChange={this.roomSearch} />
						</div>
						<div className="room-list" id="room_list" data-count="0">
							<div className="new-rooms-msg hide" id="new_rooms_msg_block">Есть обновления({this.props.new_rooms_count})!</div>
							{this.props.rooms.map((room, index) => {
										return (
										  <li key={index} className="room">
											  <Link to={`/room/${room.id}`}>
												  <div className="room-info">
													 <h3>{room.name}</h3>
													<span className="author">{room.author.name}</span>
													<span className="answers"><i className="el-icon-chat-round"></i> {room.answers_count}</span>
												  </div>
											  </Link>
										  </li>
										)
							})}
						</div>
						<footer>
							<div className="add-btn btn" id="show_more_rooms" onClick={this.showMoreRooms}>Ещё комнаты</div>
						</footer>
					</div>
	  )
	}
}

export default RoomList
