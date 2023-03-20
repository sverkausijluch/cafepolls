import React from 'react'

class ProfilePost extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<article className="post">
				<header>
					<ul>
						<li className={this.props.profile.color+'-text'}>сообщение</li>
						<li>изменения</li>
					</ul>
				</header>
				<main>
					<h2>Привет, мир!</h2>
					<p>{this.props.profile.post_text}</p>
					<img
						src={this.props.profile.post_image} />
				</main>
				<footer className="spec-msg">
					{this.props.profile.post_created_at}
				</footer>
			</article>
		)
	}
}

export default ProfilePost
