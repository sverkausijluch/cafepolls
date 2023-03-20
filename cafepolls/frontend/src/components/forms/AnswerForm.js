import React from 'react'
import CSRFToken from '../csrftoken';

const AnswerForm = (props) => {
    const sendForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        $.ajax({
            type: 'post',
            url: '../api/create-answer/' + props.room_id,
            cache: false,
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data)
                if(props.sendEvent){
                    props.sendEvent()
                }
            },
            error: function (xhr, status, error) {
                console.log(JSON.parse(xhr.responseText))
            }
        })
    }
    return (
        <form className="answer-textarea" onSubmit={sendForm}>
            <CSRFToken/>
            <textarea className="hide" name="text" id="text" id="answer_textarea"></textarea>
            <button className="send-btn">Отправить</button>
        </form>
    )
}

export default AnswerForm