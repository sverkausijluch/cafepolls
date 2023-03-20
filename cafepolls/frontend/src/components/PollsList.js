import React from 'react'
import axios from "axios"

class PollsList extends React.Component {
	constructor(props) {
		super(props)
		this.setPoll = this.setPoll.bind(this)
		this.getPollList = this.getPollList.bind(this)
		this.pollSearch = this.pollSearch.bind(this)
		this.showMorePolls = this.showMorePolls.bind(this)
	}

	componentDidMount() {
		this.getPollList([])
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.tags !== this.props.tags) {
			document.getElementById('poll_list').setAttribute('data-count', 0)
			this.getPollList(nextProps.tags, this.props.poll_section)
		}
		if (nextProps.poll_section !== this.props.poll_section) {
			document.getElementById('poll_list').setAttribute('data-count', 0)
			this.getPollList(this.props.tags, nextProps.poll_section)
		}
	}

	getPollList = (tags = [], section = 1) => {
		let polls_count = Number(document.getElementById('poll_list').getAttribute('data-count'))
		let set_poll_list = (polls, list_length) => {
			if (polls_count == 0) {
				this.props.set_polls(polls)
			} else {
				this.props.set_polls(this.props.polls.concat(polls))
			}
			if (list_length < 30) {
				document.querySelector('.show-more').classList.add('hide')
			} else {
				document.querySelector('.show-more').classList.remove('hide')
			}
			let new_count = polls_count + list_length
			document.getElementById('poll_list').setAttribute('data-count', new_count)
		}
		let search_str = document.getElementById('poll_search_input').value
		let count = document.getElementById('poll_list').getAttribute('data-count')
		let data = {tags: tags, search_str: search_str, section: section, showed_polls_count: count}
		$.ajax({
			type: 'post',
			url: '../api/polls-filter',
			cache: false,
			data: data,
			success: function (data) {
				set_poll_list(data.polls, data.polls_count)
			},
			error: function (xhr, status, error) {
				console.log(JSON.parse(xhr.responseText))
			}
		})
	}
	setPoll = (e) => {
		if (document.querySelector('.selected-option')) {
			document.querySelector('.selected-option').classList.remove('selected-option')
		}
		if (document.getElementById('selected_option')) {
			document.getElementById('selected_option').setAttribute('id', '')
		}
		this.props.set_comments_block('hide')
		this.props.set_comments([])
		axios.get('http://'+window.location.host+'/api/poll/' + e.target.dataset.id).then(poll => {
			this.props.set_poll(poll.data)
		})
	}
	showMorePolls = (e) => {
		this.getPollList(this.props.tags, this.props.poll_section)
	}
	pollSearch = (e) => {
		document.getElementById('poll_list').setAttribute('data-count', 0)
		this.getPollList(this.props.tags, this.props.poll_section)
	}

	render() {
		return (
			<>
				<input placeholder="Поиск" id="poll_search_input" className="tag-search search"
					   onChange={this.pollSearch}/>
				<div className="list">
					<ul className="themes" id="poll_list" data-count="0">
						<div
							className={this.props.poll_section == 2 ? (this.props.new_polls_count !== 0 ? "new-polls-count" : "hide") : "hide"}>Показать
							новые опросы({this.props.new_polls_count})
						</div>
						{this.props.polls.map((poll, index) => {
							return (
								<li key={index} data-id={poll.id} onClick={this.setPoll} className="poll-list-el">
									{poll.question}
								</li>
							)
						})}
						<div className="show-more" onClick={this.showMorePolls}>Показать больше</div>
					</ul>
				</div>
			</>
		)
	}
}

export default PollsList
