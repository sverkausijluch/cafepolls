import React, {useEffect, useState} from 'react'
import axios from "axios"
import CiteHeader_wrap from "./wraps/CiteHeader_wrap"
import ProfileHeader from "./ProfileHeader"
import ProfilePost from "./ProfilePost"
import ProfileInfo from "./ProfileInfo"
import ProfileSystemUpdates from "./ProfileSystemUpdates"
import {useParams} from "react-router-dom"

function Profile() {
	const {id} = useParams()
	const [profile_data, setProfiledata] = useState({})
	const useMountEffect = () => {
		useEffect(() => {
			axios.get('http://'+window.location.host+'/api/get-profile/' + id).then(profile => {
				setProfiledata(profile.data)
			})
		},[])
	}
	useMountEffect()
	return (
		<>
			<CiteHeader_wrap />
			<main className="small-container profile-cite">
				<ProfileHeader profile={profile_data} />
				<div className="content">
					<div className="col1">
						<ProfilePost profile={profile_data} />
					</div>
					<div className="col2">
						<ProfileInfo profile={profile_data} />
					</div>
				</div>
			</main>
		</>
	)
}

export default Profile
