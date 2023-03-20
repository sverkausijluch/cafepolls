import React from 'react'
import ProfileCreateForm from './../forms/ProfileCreateForm'

class ProfileCreate extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		let access = localStorage.getItem('access_to_profile_create')
		if (access != 'true') {
			window.location.replace('http://'+window.location.host+'/walk-page')
		}
	}
	render() {
	  return (
		  <main className="sm-container auth">
			  <ProfileCreateForm />
		  </main>
	  )
	}
}

export default ProfileCreate
