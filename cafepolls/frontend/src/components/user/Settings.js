import React from 'react'
import CiteHeader_wrap from "../wraps/CiteHeader_wrap"
import UserSettingsForm from "../forms/UserSettingsForm"
import { Link } from "react-router-dom"

class Settings extends React.Component {
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
								<li className="active">аккаунт</li>
								<li><Link to="../profile-settings">профиль</Link></li>
							</ul>
						</div>
						<div className="col2">
							<UserSettingsForm />
						</div>
					</div>
				</main>
			</>
		)
	}
}

export default Settings
