import React from 'react'
import CiteHeader_wrap from "../wraps/CiteHeader_wrap"
import ProfileSettingsForm from "../forms/ProfileSettingsForm"
import { Link } from "react-router-dom"

class ProfileSettings extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<>
				<CiteHeader_wrap/>
				<main className="settings-main">
					<h1>Настройки</h1>
					<div className="intro">
						<div className="col1">
							<ul>
								<li><Link to="../settings">аккаунт</Link></li>
								<li className="active">профиль</li>
							</ul>
						</div>
						<div className="col2">
							<ProfileSettingsForm />
						</div>
					</div>
				</main>
			</>
		)
	}
}

export default ProfileSettings
