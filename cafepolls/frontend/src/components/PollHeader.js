import React from 'react'

class PollHeader extends React.Component {
	constructor(props) {
		super(props)
		this.savePoll = this.savePoll.bind(this)
	}
	savePoll = () => {
		let set_saved_status = (status) => {
			this.props.set_poll_saved(status)
		}
		let saved_status = this.props.poll_saved
		$.ajax({
			type: 'post',
			url: './api/save-poll/'+this.props.active_poll.id,
			cache: false,
			data: {saved_status:saved_status},
			dataType: "json",
			success: function(data) {
				set_saved_status(data)
			},
			error: function(xhr, status, error){
				console.log(JSON.parse(xhr.responseText))
			}
		})
	}
	render() {
	  return (
          <header>
              <h3>{this.props.active_poll.question}</h3>
              <p className="author">Автор: <span className="blue-text underline-hover">{this.props.active_poll.author}</span></p>
              <p><span className="blue-text underline-hover" id="save_poll_btn" onClick={this.savePoll}>{this.props.poll_saved==1 ? 'сохранено' : 'в закладки'}</span></p>
          </header>
	  )
	}
}

export default PollHeader
