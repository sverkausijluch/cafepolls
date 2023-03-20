import React from 'react'
import RoomsForm_wrap from '.././wraps/RoomsForm_wrap.js'

class CreateRoom extends React.Component {
	constructor(props) {
		super(props)
		this.closeCreateRoomWindow = this.closeCreateRoomWindow.bind(this)
	}
	closeCreateRoomWindow = (e) => {
		this.props.set_window('no')
		document.querySelector('body').style.overflow = 'auto'
	}
	render() {
	  return (
		  <div className="big-window">
			  <header>
				 <i className="el-icon-back" onClick={this.closeCreateRoomWindow}></i> <h4> Создать комнату</h4>
			  </header>
			  <main>
				<RoomsForm_wrap />
			  </main>
		  </div>
	  )
	}
}

export default CreateRoom
