import React from 'react'

class ProfileSystemUpdates extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="profile-info">
				<header><h4 className={this.props.profile.color+'-text'}>Внесенные изменения</h4></header>
				<ul className={this.props.profile.color+"-scroll-color profile-system-updates"}>
					<li>
						сменил название сообщества
					</li>
					<li>
						удалил сообщение пользователя
					</li>
					<li>
						поставил новость в карусели
					</li>
					<li>
						сменил название сообщества
					</li>
					<li>
						удалил сообщение пользователя
					</li>
					<li>
						поставил новость в карусели
					</li>
					<li>
						сменил название сообщества
					</li>
					<li>
						удалил сообщение пользователя
					</li>
					<li>
						поставил новость в карусели
					</li>
				</ul>
			</div>
		)
	}
}

export default ProfileSystemUpdates
