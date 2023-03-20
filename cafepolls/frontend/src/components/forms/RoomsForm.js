import React from 'react'
import TagFilter_wrap from "../wraps/TagFilter_wrap"
import TextEditor from "../elements/TextEditor"
import ColorsBlock from "../elements/ColorsBlock";

class RoomsForm extends React.Component {
	constructor(props) {
		super(props)
		this.createRoom = this.createRoom.bind(this)
		this.openColorsWin = this.openColorsWin.bind(this)
		this.selectColor = this.selectColor.bind(this)
		this.addForm = this.addForm.bind(this)
		this.state = {
			selected_color: '',
		}
	}
    createRoom = (e) => {
        let send_count = () => {
            this.props.set_new_rooms_count(this.props.new_rooms_count+1)
        }
                e.preventDefault()
                const formData = new FormData(document.getElementById('rooms_form'))
                let tags = this.props.rooms_form_tags
                for (let i = 0; i < tags.length; i++) {
                  formData.append('tags[]', tags[i])
                }
                formData.append('color', this.state.selected_color)
                    $.ajax({
                        type: 'post',
                        url: './api/create-room/',
                        cache: false,
                        data: formData,
                        processData: false,
                        contentType: false,
                        success: function(data) {
                            send_count()
                        },
                        error: function(xhr){
                            console.log(JSON.parse(xhr.responseText))
                        }
                    })
    }
    openColorsWin = (e) => {
               let colors_block = document.getElementById('create_room_colors_block')
               if(colors_block.classList.contains('hide')) {
                   colors_block.classList.remove('hide')
               } else {
                   colors_block.classList.add('hide')
               }
    }
    selectColor = (e) => {
        let color = e.target.getAttribute('data-colorname')
        let colors_block = document.getElementById('create_room_colors_block')
        this.setState({
            selected_color: color
        })
        let selected_color_block = document.getElementById('selected_color')
        selected_color_block.className = 'selected-design'
        selected_color_block.classList.add(color)
        colors_block.classList.add('hide')
    }
    addForm = (e) => {
		let new_form = document.querySelector('.option-form').cloneNode(true)
        document.querySelector('.option-forms').append(new_form)
    }
    render() {
        return (
            <div className="poll-form rooms-form">
                <form className="settings-form" id="rooms_form">
                    <div className="inputWrapper">
                        <label><span>Название</span></label>
                        <div className="inputBlock">
                            <input name="name" placeholder=" = ^ᴗ^ = "/>
                        </div>
                    </div>
                <h5>Текст сообщения</h5>
                <div className="answer-input">
                    <TextEditor content="roomsform" />
                    <input className="hide" name="message" id="roomsform_textarea" />
                </div>
                </form>
                <div className="inputWrapper">
                        <label><span>Оформление</span></label>
                        <div className="inputBlock">
                            <div className="design-select">
                                <div className="selected-design violet" id="selected_color"> = ^ᴗ^ =</div>
                                <div className="select-design-btn">
                                    <span onClick={this.openColorsWin}>Выбрать цвет</span>
                                    <div id="create_room_colors_block" className="color-select-win hide">
                                        <ColorsBlock selectColor={this.selectColor} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <form className="settings-form" id="question_form">
                    <div className="inputWrapper">
                        <label><span>Теги</span></label>
                        <div className="inputBlock">
			  		        <TagFilter_wrap type="form" form_type="poll" />
                        </div>
                    </div>
                </form>
                <button className="send-btn" onClick={this.createRoom}>Создать</button>
            </div>
        )
    }
}

export default RoomsForm