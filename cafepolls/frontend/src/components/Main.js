import React from 'react'
import CiteHeader_wrap from './wraps/CiteHeader_wrap.js'
import PollsFilter_wrap from './wraps/PollsFilter_wrap.js'
import PollsList_wrap from "./wraps/PollsList_wrap"
import Poll_wrap from './wraps/Poll_wrap.js'
import CreatePoll_wrap from './wraps/CreatePoll_wrap.js'
import CreateRoom_wrap from './wraps/CreateRoom_wrap.js'
import RoomsTagFilter_wrap from './wraps/RoomsTagFilter_wrap.js'
import RoomList_wrap from './wraps/RoomList_wrap.js'
import RoomsHeader_wrap from './wraps/RoomsHeader_wrap.js'
import PollsHeader from './PollsHeader.js'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Main(props) {
	// два раза прогружается?! и даже три!
	const location = useLocation()
		const useMountEffect = () => {
			if (location.state) {
				let section = location.state.section
				useEffect(() => {
					if (section !== null) {
						let selectedSectionHeight = document.getElementById(section + '_section').offsetTop - 35
						window.scrollTo(0, selectedSectionHeight)
						document.querySelectorAll('#cite_menu .line').forEach(el => el.classList.add('hide'))
						document.getElementById(section + '_btn').querySelector('.line').classList.remove('hide')
					}
				})
			}
		}
	useMountEffect()
	return (
		<>
			<CiteHeader_wrap />
			{(() => {
				if (props.window === 'createpoll') {
					return <div className="shadow"><CreatePoll_wrap/></div>
				} else if (props.window === 'createroom') {
					return <div className="shadow"><CreateRoom_wrap/></div>
				} else if (props.window === 'no') {
					return (
						''
					)
				}
			})()}
			<main>
				<div className="rooms container" id="rooms_section">
					<RoomsHeader_wrap/>
					<div className="all-rooms">
						<RoomsTagFilter_wrap/>
						<RoomList_wrap/>
					</div>
				</div>
				<div className="opros container" id="polls_section">
					<PollsHeader/>
					<div className="flex">
						<div className="col1">
							<PollsFilter_wrap/>
							<PollsList_wrap/>
						</div>
						<Poll_wrap/>
					</div>
				</div>
			</main>
		</>
	)
}

export default Main