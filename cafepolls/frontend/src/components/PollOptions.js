import React from 'react'
import axios from "axios";

class PollOptions extends React.Component {
	constructor(props) {
		super(props)
		this.selectOption = this.selectOption.bind(this)
		this.setVoices = this.setVoices.bind(this)
	}
	componentWillReceiveProps(nextProps, nextContext) {
		if(nextProps.active_poll.id !== this.props.active_poll.id) {
			axios.get('/api/is-my-voice/'+nextProps.active_poll.id).then(res => {
				this.props.send_voice(res.data)
			}).then((e)=> {
				this.setVoices(nextProps.active_poll.id)
			})
		}
		if(nextProps.voice_sended !== this.props.voice_sended) {
			this.setVoices(this.props.active_poll.id)
		}
	}
	selectOption = (e) => {
		if(document.querySelector('.selected-option')) {
			document.querySelector('.selected-option').classList.remove('selected-option')
		}
		if(document.getElementById('selected_option')) {
			document.getElementById('selected_option').setAttribute('id', '')
		}
		e.target.classList.add('selected-option')
		e.target.setAttribute('id','selected_option')
	}
	setVoices = (poll_id) => {
		let sum = (arr=>arr.reduce((partialSum, a) => partialSum + a, 0))
		let count = 0
		axios.get('/api/get-voices/' + poll_id).then(res => {
			count = sum(res.data)
			this.props.set_voices_count(count)
			if(this.props.voice_sended!==0) {
				this.props.set_voices(res.data)
			}
		})
	}
	render() {
	  return (
		<ul id="poll_vars" className={this.props.voice_sended!=0 ? 'done' : ''}>
			{this.props.active_poll.options.map((option, index) => {
				return (
					<li
						key={index} data-id={option.id} onClick={this.selectOption} className="map">
						{option.text}
						<div className="progress" style={{width : this.props.voice_sended!=0 ? ((this.props.voices[index]/this.props.voices_count)*100+'%'):0}}></div>
					</li>
				)
			})}
		</ul>
	  )
	}
}

export default PollOptions
