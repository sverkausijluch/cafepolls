import React from 'react'

class PollsHeader extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<>
				<div className="block-title">
					<h3>
						<img src="https://cdn-icons-png.flaticon.com/512/6961/6961057.png" className="small-icon" />Опросы
					</h3>
				</div>
			</>
		)
	}
}

export default PollsHeader