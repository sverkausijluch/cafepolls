import React from 'react'

class ProfileInfo extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<ul className="profile-info">
				<header><h4 className={this.props.profile.color+'-text'}>Информация</h4></header>
				<li>
					<span className="title">Город</span>
					<span className="text">{this.props.profile.city}</span>
				</li>
				<li>
					<span className="title">Почта</span>
					<span className="text">{this.props.profile.email}</span>
				</li>
				<li>
					<span className="title">Сайт</span>
					<span className="text">{this.props.profile.webcite}</span>
				</li>
			</ul>
		)
	}
}

export default ProfileInfo
