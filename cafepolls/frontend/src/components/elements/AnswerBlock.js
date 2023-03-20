import React from 'react'
import {specialtagstohtml} from './TextEditor'
import parse from "html-react-parser"
import Thanks_wrap from "../wraps/Thanks_wrap"

const AnswerBlock = (props) => {
	let textshow = specialtagstohtml(props.answer.text)
	return (
		<div className="answer">
			<div className="author">
				<img src={props.answer.author.avatar}/>
				<div className="author-info">
					<span className="name">{props.answer.author.name}</span>
				</div>
			</div>
			<div className="text">
				<span className="date">{props.answer.created_at}</span>
				<p>
					{parse(textshow)}
				</p>
				<div className="answer-btns">
					<span className="otvet">ответить</span>
					<Thanks_wrap answer={props.answer}/>
				</div>
			</div>
		</div>
	)
}

export default AnswerBlock