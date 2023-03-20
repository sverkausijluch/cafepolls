import React, {useEffect} from 'react'
import CSRFToken from '../csrftoken';

const CommentForm = (props) => {
           const sendForm = (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget)
                    $.ajax({
                        type: 'post',
                        url: '../api/create-comment/'+props.poll_id,
                        cache: false,
                        data: formData,
                        processData: false,
                        contentType: false,
                        success: function(data) {
                            props.createCommentEvent(data.text, data.created_at, data.author.name, data.author.avatar, data.id)
                        },
                        error: function(xhr, status, error){
                            console.log(JSON.parse(xhr.responseText))
                        }
                    })
           }
        return (
                <form className="comment-textarea" onSubmit={sendForm}>
                    <CSRFToken />
                    <div className="textarea-block">
                        <div className="smile-btn"><img src="https://cdn-icons-png.flaticon.com/512/1656/1656373.png" className="btn-icon" /></div>
                        <textarea name="text" id="text" defaultValue="Введите текст..."></textarea>
                    </div>
                    <button><i className="el-icon-s-promotion"></i></button>
                </form>
        )
}

export default CommentForm