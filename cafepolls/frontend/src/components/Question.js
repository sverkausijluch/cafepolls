import React from 'react'
import axios from "axios"
import PollHeader_wrap from './wraps/PollHeader_wrap.js'
import PollOptions_wrap from './wraps/PollOptions_wrap.js'
import PollFooter_wrap from './wraps/PollFooter_wrap.js'

class Question extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		// здесь нам надо будет получать самый популярный опрос
		if(this.props.active_poll.id == 0) {
			axios.get('http://'+window.location.host+'/api/poll/' + 1).then(poll => {
				this.props.set_poll(poll.data)
			})
		}
	}
	render() {
	  return (
				<div>
					<div className="test question">
						<PollHeader_wrap />
						<PollOptions_wrap />
						<PollFooter_wrap />
					</div>
				</div>
	  )
	}
}

export default Question
