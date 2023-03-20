import React from 'react'

class ProfileHeader extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<header className="main-profile-header">
				<img src={this.props.profile.cover} className="cover" />
				<div className="user-info">
					<img src={this.props.profile.avatar} className="avatar" />
					<h3 className={this.props.profile.color+'-text'}>{this.props.profile.name}</h3>
				</div>
			</header>
		)
	}
}

export default ProfileHeader
