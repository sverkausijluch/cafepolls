import React from 'react';
import PollForm_wrap from '.././wraps/PollForm_wrap.js'

class CreatePoll extends React.Component {
	constructor(props) {
		super(props)
		this.closeCreatePollWindow = this.closeCreatePollWindow.bind(this)
	}
	closeCreatePollWindow = (e) => {
		this.props.set_window('no')
		document.querySelector('body').style.overflow = 'auto'
	}
	render() {
	  return (
		  <div className="big-window">
			  <header>
				 <i className="el-icon-back" onClick={this.closeCreatePollWindow}></i> <h4> Создать опрос</h4>
			  </header>
			  <main>
				<PollForm_wrap />
			  </main>
		  </div>
	  )
	}
}

export default CreatePoll
