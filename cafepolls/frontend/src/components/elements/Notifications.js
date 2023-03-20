import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

class Notifications extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		axios.get(window.location.origin+'/api/get-notifications').then(notifications => {
			let notifications_list = notifications.data
			this.props.set_notifications(notifications_list)
		})
	}
	render() {
		return (
			<div className="notifications-block hide" id="notifications_block">
				<ul>
					{this.props.notifications.map((notification, index) => {
						return (
							<li key={index}>
								<Link to={`/room/${notification.object}`}>
									<div className="author">
										{notification.sender.name} <span className="date">{notification.created_at}</span>
										<img src={notification.sender.avatar} />
									</div>
									<p>
										{(() => {
											if (notification.type === 0) {
												return "поблагодарил за ответ"
											} else {
												return (
													''
												)
											}
										})()}: "{notification.text}..."
									</p>
								</Link>
							</li>
						)
					})}
				</ul>
            </div>
		)
	}
}

export default Notifications