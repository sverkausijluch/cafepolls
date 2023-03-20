import React from 'react'
import Question_wrap from "./wraps/Question_wrap"
import Comments_wrap from "./wraps/Comments_wrap"

class Poll extends React.Component {
	constructor(props) {
		super(props)
		this.sendVoice = this.sendVoice.bind(this)
	}
	sendVoice = (e) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget);
                    $.ajax({
                        type: 'post',
                        url: './api/send-voice',
                        cache: false,
                        data: formData,
                        processData: false,
                        contentType: false,
                        dataType: "json",
                        success: function(data) {
                             console.log(data)
                        },
                        error:  function(data){
                           alert(0)
                        }
                    })
	}
	render() {
	  return (
				<div className="col2">
					{(() => {
							if (this.props.comments_block === 'hide') {
								return <Question_wrap />
							} else {
								return <Comments_wrap />
							}
					})()}
				</div>
	  )
	}
}

export default Poll
