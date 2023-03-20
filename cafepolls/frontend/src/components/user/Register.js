import React from 'react'
import RegisterForm from './../forms/RegisterForm'
import CreatePoll_wrap from "../wraps/CreatePoll_wrap";

class Register extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		let access = localStorage.getItem('access_to_register')
		if (access != 'true') {
			window.location.replace("http://127.0.0.1:8000/walk-page")
		}
	}
	render() {
		return (
			<main className="sm-container auth">
				<div className="register-window">
					<h1>Регистрация</h1>
					<img
						src="https://sun9-32.userapi.com/impg/ZOGhKPN1vjMz08IkETlGp0iX3XjE-40riUezaQ/A4m-sb2SEC0.jpg?size=736x460&quality=95&sign=53d681fa0cda7b07b02c1450852dfa57&type=album"
						className="auth-header"/>
					<RegisterForm/>
				</div>
			</main>
		)
	}
}

export default Register
