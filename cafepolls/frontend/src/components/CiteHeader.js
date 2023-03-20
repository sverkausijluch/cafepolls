import React from 'react'
import axios from "axios"
import Notifications_wrap from "./wraps/Notifications_wrap"
import { Link } from "react-router-dom"

class CiteHeader extends React.Component {
	constructor(props) {
		super(props)
		this.showBlock = this.showBlock.bind(this)
	}
	componentDidMount() {
		axios.get('http://'+window.location.host+'/api/get-user').then(user => {
			let this_user = user.data
			this.props.set_user({id:this_user.id,name:this_user.username,profile_id:this_user.profile.id,profile_name:this_user.profile.name,profile_avatar:this_user.profile.avatar})
		})
	}
	componentWillReceiveProps(nextProps, nextContext) {
		if(nextProps.user !== this.props.user) {
			/* if (typeof this['userSocket' + nextProps.user.profile_id] == 'undefined') {
				this['userSocket' + nextProps.user.profile_id] = new WebSocket(
					'ws://' + window.location.host + '/ws/user/' + nextProps.user.profile_id)
			}
			this['userSocket' + nextProps.user.profile_id].onmessage = (event) => {
				let notification = JSON.parse(event.data)
				notification['type'] = notification['notif_type']
				this.props.add_notification(notification)
				let kolokolchik = document.getElementById('notifications_btn')
				kolokolchik.style.color = '#6b99ad'
			} */
		}
	}
	showBlock = (e) => {
		let type = e.target.getAttribute('data-type')
		if(document.getElementById(type+'_block').classList.contains('hide')) {
			document.getElementById(type+'_block').classList.remove('hide')
		} else {
			document.getElementById(type+'_block').classList.add('hide')
		}
	}
	render() {
	  return (
		  <>
			<header className="first-header">
				<div className="logo">
					<img src="https://cdn-icons-png.flaticon.com/512/834/834374.png" />
					<h3>一间咖啡厅</h3>
				</div>
			</header>
			<header className="second-header">
				<ul className="cite-menu" id="cite_menu">
					<li id="rooms_btn">
						<Link to=".." state={{ section: "rooms" }}>
							<span>Комнаты</span>
						</Link>
						<div className="line"></div>
					</li>
					<li id="polls_btn">
						<Link to=".." state={{ section: "polls" }}>
							<span>Опросы</span>
						</Link>
						<div className="line hide"></div>
					</li>
				</ul>
				<div className="search-block">
					<div className="input">
						<input className="search" placeholder="Искать очень замечательного котика" />
							<i className="el-icon-search"></i>
					</div>
					<div className="search-result hide" id="search_result">
						<ul>
							<li>Статическая типизация</li>
							<li>API для компонента Profiler</li>
							<li>Проверка типов с помощью PropTypes</li>
							<li>Интеграция с плагинами, изменяющими DOM</li>
							<li>Компоненты высшего порядка</li>
							<li className="text-btn">смотреть другие результаты <i className="el-icon-arrow-right"></i>
							</li>
						</ul>
					</div>
				</div>
				<div className="profile-block">
					<div className="flex-end">
						<img src={this.props.user.profile_avatar} className="avatar" />
						<span className="name">{this.props.user.profile_name} <i className="el-icon-arrow-down" data-type="profile" onClick={this.showBlock}></i></span>
						<i className="el-icon-bell bell" id="notifications_btn" data-type="notifications" onClick={this.showBlock}></i>
					</div>
					<div className="profile-menu hide" id="profile_block">
						<ul>
							<li>
							<Link to="./settings">
							<i className="el-icon-setting"></i> Настройки
							</Link>
							</li>
							<li><a href="./logout/"><i className="el-icon-mobile"></i> Выход</a></li>
						</ul>
					</div>
					<Notifications_wrap />
				</div>
			</header>
		  </>
	  )
	}
}

export default CiteHeader
