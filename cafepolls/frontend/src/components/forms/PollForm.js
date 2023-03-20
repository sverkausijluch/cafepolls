import React from 'react';
import TagFilter_wrap from "../wraps/TagFilter_wrap";

class PollForm extends React.Component {
	constructor(props) {
		super(props)
		this.createPoll = this.createPoll.bind(this)
		this.openColorsWin = this.openColorsWin.bind(this)
		this.selectColor = this.selectColor.bind(this)
		this.addForm = this.addForm.bind(this)
	}
    createPoll = (e) => {
        let set_sended_poll = (e) => {
            let sended_polls_count = this.props.sended_polls + 1
            this.props.set_sended_polls(sended_polls_count)
        }
                e.preventDefault()
                const formData = new FormData(document.getElementById('question_form'))
                let tags = this.props.poll_form_tags
                for (let i = 0; i < tags.length; i++) {
                  formData.append('tags[]', tags[i])
                }
                    $.ajax({
                        type: 'post',
                        url: './api/create-poll/',
                        cache: false,
                        data: formData,
                        processData: false,
                        contentType: false,
                        success: function(res) {
                            set_sended_poll()
                            document.querySelectorAll('.option-form').forEach(function (form) {
                                const formOptionsData = new FormData(form);
                                 $.ajax({
                                    type: 'post',
                                    url: './api/add-options/'+res.poll_id,
                                    cache: false,
                                    data: formOptionsData,
                                    processData: false,
                                    contentType: false,
                                })
                            });
                        },
                        error:  function(data){
                           alert(0)
                        }
                    })
    }
    openColorsWin = (e) => {
               let colors_block = document.getElementById('create_poll_colors_block')
               if(colors_block.classList.contains('hide')) {
                   colors_block.classList.remove('hide')
               } else {
                   colors_block.classList.add('hide')
               }
    }
    selectColor = (e) => {
               let color = e.target.getAttribute('data-color')
                this.setState({
                  selected_color: color
                })
               let selected_color_block = document.getElementById('selected_color')
               selected_color_block.className = 'selected-design'
               selected_color_block.classList.add(color)
    }
    addForm = (e) => {
		let new_form = document.querySelector('.option-form').cloneNode(true)
        document.querySelector('.option-forms').append(new_form)
    }
    render() {
        return (
            <div className="poll-form">
                <form className="settings-form" id="question_form">
                    <div className="inputWrapper">
                        <label><span>Текст вопроса</span></label>
                        <div className="inputBlock">
                            <input name="question" id="poll_text" placeholder=" = ^ᴗ^ = "/>
                        </div>
                    </div>
                </form>
                <h5>Варианты ответа:</h5>
                <div className="option-forms">
                    <form className="settings-form option-form" id="options_form0">
                        <div className="inputWrapper">
                            <label><span>Вариант</span></label>
                            <div className="inputBlock">
                                <input name="text" placeholder=" = ^ᴗ^ = "/>
                            </div>
                        </div>
                    </form>
                    <form className="settings-form option-form" id="options_form0">
                        <div className="inputWrapper">
                            <label><span>Вариант</span></label>
                            <div className="inputBlock">
                                <input name="text" placeholder=" = ^ᴗ^ = "/>
                            </div>
                        </div>
                    </form>
                </div>
                <span className="text-btn" onClick={this.addForm}>добавить вариант</span>
                <form className="settings-form" id="question_form">
                    <div className="inputWrapper">
                        <label><span>Теги</span></label>
                        <div className="inputBlock">
			  		        <TagFilter_wrap type="form" form_type="poll" />
                        </div>
                    </div>
                </form>
                <button className="send-btn" onClick={this.createPoll}>Создать</button>
            </div>
        )
    }
}

export default PollForm