import React from 'react'

class PollFooter extends React.Component {
	constructor(props) {
		super(props)
		this.openComments = this.openComments.bind(this)
		this.sendVoice = this.sendVoice.bind(this)
	}
	componentWillReceiveProps(nextProps, nextContext) {
		if(nextProps.active_poll.id !== this.props.active_poll.id) {
			if (typeof this['pollSocket' + this.props.active_poll.id] !== 'undefined') {
				this['pollSocket' + this.props.active_poll.id].close()
			}
			this['pollSocket'+nextProps.active_poll.id] = new WebSocket(
					'ws://' + window.location.host + '/ws/poll/' + nextProps.active_poll.id + '/')
				this['pollSocket'+nextProps.active_poll.id].onmessage = e => {
					this.props.send_voice(2)
				}
			}
	}
	openComments = (e) => {
		this.props.set_comments_block('open')
	}
	sendVoice = (e) => {
		e.preventDefault()
		let selected_option = document.getElementById('selected_option')
		let option_id = selected_option.getAttribute('data-id')
		let socket_send = () => {
			this.props.send_voice(2)
			this['pollSocket'+this.props.active_poll.id].send(JSON.stringify({'selected_option': option_id}))
		}
                    $.ajax({
                        type: 'post',
                        url: './api/send-voice',
                        cache: false,
                        data: {option:option_id},
                        dataType: "json",
                        success: function(data) {
							socket_send()
                        },
                        error:  function(xhr, status, error){
                           console.log(JSON.parse(xhr.responseText))
                        }
                    })
	}
	render() {
	  return (
				<div>
                    <footer>
                        {this.props.voice_sended==0 ?
                            <button className="btn" onClick={this.sendVoice}>Ответить</button> : ''}
                        <p>Голосов отправлено: {this.props.voices_count}</p>
                    </footer>
                    <div className="to-comments" onClick={this.openComments}><span>комментарии</span></div>
				</div>
	  )
	}
}

export default PollFooter
