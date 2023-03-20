import React from 'react'
import TagFilter_wrap from "./wraps/TagFilter_wrap"

class PollsFilter extends React.Component {
	constructor(props) {
		super(props)
		this.setPollSection = this.setPollSection.bind(this)
		this.setThisSection = this.setThisSection.bind(this)
		this.openCreatePollWindow = this.openCreatePollWindow.bind(this)
	}
	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.sended_polls !== this.props.sended_polls) {
			if (typeof this.newpollsSocket !== 'undefined') {
				this.newpollsSocket.send(JSON.stringify({
					'is_new_poll': 1,
				}))
			}
		}
	}
	setPollSection = (e) => {
		let span = document.getElementById('section_name')
		let section_saved = document.getElementById('saved_section_name')
		let active_section = span.getAttribute('data-type')
		if(section_saved.classList.contains('active-text')){
			section_saved.classList.remove('active-text')
		}
		if(active_section == 1) {
			this.props.set_poll_section(2)
			span.textContent = 'новое'
			span.classList.add('active-text')
			span.setAttribute('data-type',"2")
			if (typeof this.newpollsSocket == 'undefined') {
				this.newpollsSocket = new WebSocket(
					'ws://' + window.location.host + '/ws/newpolls/')
			}
			this.newpollsSocket.onmessage = e => {
				let count = this.props.new_polls_count + 1
				this.props.set_new_polls_count(count)
			 }
		}else{
			this.props.set_poll_section(1)
			span.textContent = 'популярное'
			span.classList.add('active-text')
			span.setAttribute('data-type',"1")
		}
	}
	setThisSection = (e) => {
		let type = e.target.getAttribute('data-type')
		if(type=='saved') {
			let section_saved = document.getElementById('saved_section_name')
			let span = document.getElementById('section_name')
			if(span.classList.contains('active-text')){
				span.classList.remove('active-text')
			}
			if(this.props.poll_section != 3) {
				section_saved.classList.add('active-text')
				this.props.set_poll_section(3)
			}
		}else {
			let span = document.getElementById('section_name')
			span.classList.add('active-text')
			let active_section = span.getAttribute('data-type')
			this.props.set_poll_section(active_section)
			let section_saved = document.getElementById('saved_section_name')
			section_saved.classList.remove('active-text')
		}
	}
	openCreatePollWindow = (e) => {
		this.props.set_window('createpoll')
		document.querySelector('body').style.overflow = 'hidden'
	}
	render() {
	  return (
				<>
					<div className="block-title">
						<h4>Выбрать опрос</h4>
						<div className="add-btn" onClick={this.openCreatePollWindow}>Добавить</div>
						<ul className="toggle">
							<li className="saves" id="saved_section_name" onClick={this.setThisSection} data-type="saved">закладки</li>
							<li onClick={this.setThisSection} data-type="range"><i className="el-icon-arrow-down" onClick={this.setPollSection}></i><span id="section_name" className='active-text' data-type="1">популярное</span></li>
						</ul>
					</div>
			  		<TagFilter_wrap type="polls" />
					<div className="border-line"></div>
				</>
	  )
	}
}

export default PollsFilter
