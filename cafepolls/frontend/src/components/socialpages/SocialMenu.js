import React from 'react'
import InviteCreator from '../elements/InviteCreator'
import axios from "axios"

class SocialMenu extends React.Component {
	constructor(props) {
		super(props)
		this.getInviteMsg = this.getInviteMsg.bind(this)
	}
	getInviteMsg = () => {
		alert(1)
	}
	render() {
	  return (
          <>
			  <InviteCreator />
          </>
	  )
	}
}

export default SocialMenu
