import React from 'react'
import axios from "axios"
import AnswerBlock from "./elements/AnswerBlock"

class RoomAnswers extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		axios.get('http://'+window.location.host+'/api/answers/' + this.props.id).then(answers => {
			this.props.set_answers(answers.data)
		})
	}

	render() {
		return (
			<div className="answers">
				<header className="answers-header">
					<span className="filter">сначала новые <i className="el-icon-arrow-down"></i></span>
					<h3>Ответы</h3>
				</header>
				{this.props.answers.map((answer, index) => {
					return (
						<AnswerBlock key={answer.id} answer={answer} />
					)
				})}
			</div>
		)
	}
}

export default RoomAnswers