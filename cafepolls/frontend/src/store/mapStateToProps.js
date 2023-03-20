function mapStateToProps(component) {
	switch (component) {
		case "CiteHeader": {
			return function (state) {
				return {
					user: state.user
				};
			}
		}
		case "Main": {
			return function (state) {
				return {
					window: state.window,
					user: state.user
				}
			}
		}
		case "PollsFilter": {
			return function (state) {
				return {
					active_poll: state.active_poll,
					polls: state.polls,
					voices: state.voices,
					poll_section: state.poll_section,
					sended_polls: state.sended_polls,
					new_polls_count: state.new_polls_count,
				}
			}
		}
		case "PollsList": {
			return function (state) {
				return {
					polls: state.polls,
					poll_section: state.poll_section,
					tags: state.tags,
					new_polls_count: state.new_polls_count,
				}
			}
		}
		case "PollForm": {
			return function (state) {
				return {
					poll_form_tags: state.poll_form_tags,
					sended_polls: state.sended_polls,
				}
			}
		}
		case "RoomsForm": {
			return function (state) {
				return {
					rooms_form_tags: state.rooms_form_tags,
					new_rooms_count: state.new_rooms_count,
				}
			}
		}
		case "RoomsHeader": {
			return function (state) {
				return {
					new_rooms_count: state.new_rooms_count,
				}
			}
		}
		case "Poll": {
			return function (state) {
				return {
					comments_block: state.comments_block
				};
			}
		}
		case "Question": {
			return function (state) {
				return {
					active_poll: state.active_poll,
					voice_sended: state.voice_sended,
					voices: state.voices,
					voices_count: state.voices_count,
				}
			}
		}
		case "PollHeader": {
			return function (state) {
				return {
					active_poll: state.active_poll,
					poll_saved: state.poll_saved,
				}
			}
		}
		case "PollOptions": {
			return function (state) {
				return {
					active_poll: state.active_poll,
					voice_sended: state.voice_sended,
					voices_count: state.voices_count,
					voices: state.voices,
				}
			}
		}
		case "PollFooter": {
			return function (state) {
				return {
					active_poll: state.active_poll,
					voice_sended: state.voice_sended,
					voices: state.voices,
					voices_count: state.voices_count,
				}
			}
		}
		case "Comments": {
			return function (state) {
				return {
					active_poll: state.active_poll,
					comments: state.comments,
				}
			}
		}
		case "RoomList": {
			return function (state) {
				return {
					rooms: state.rooms,
					room_tags: state.room_tags,
					room_section: state.room_section,
					new_rooms_count: state.new_rooms_count,
				}
			}
		}
		case "TagFilter": {
			return function (state) {
				return {
					room_tags: state.room_tags,
					tags: state.tags,
				}
			}
		}
		case "RoomHeader": {
			return function (state) {
				return {
					room: state.room,
					room_saved: state.room_saved,
				}
			}
		}
		case "RoomAnswers": {
			return function (state) {
				return {
					answers: state.answers,
				}
			}
		}
		case "Thanks": {
			return function (state) {
				return {
					user: state.user,
				}
			}
		}
		case "Notifications": {
			return function (state) {
				return {
					notifications: state.notifications,
				}
			}
		}
		default: return undefined;
	}
}

export default mapStateToProps;