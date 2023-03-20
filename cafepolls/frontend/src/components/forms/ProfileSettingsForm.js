import React, {useEffect, useState} from 'react'
import CSRFToken from '../csrftoken'
import Dropzone from '../elements/Dropzone'
import ColorsBlock from "../elements/ColorsBlock"
import axios from "axios"
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ProfileSettingsForm = (props) => {
	const [profile_data, setProfiledata] = useState({})
    const [profileColor, setProfileColor] = useState('')

    const formik = useFormik({
                 initialValues: {
                   name: '',
                   email: '',
                   webcite: '',
                   city: '',
                   post_title: '',
                   post_text: '',
                 },
                enableReinitialize: true,
                 validationSchema: Yup.object({
                   name: Yup.string()
                     .required('Не оставляйте поле с именем пустым'),
                 }),
               })
    const useMountEffect = () => {
		useEffect(() => {
			axios.get('http://'+window.location.host+'/api/get-my-profile').then(profile => {
				setProfiledata(profile.data)
				setProfileColor(profile.data.color)
                formik.setFieldValue('name', profile.data.name)
                formik.setFieldValue('email', profile.data.email)
                formik.setFieldValue('webcite', profile.data.webcite)
                formik.setFieldValue('city', profile.data.city)
                formik.setFieldValue('post_title', profile.data.post_title)
                formik.setFieldValue('post_text', profile.data.post_text)
			})
		},[])
	}
    useMountEffect()
    const sendForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        $.ajax({
            type: 'post',
            url: '../api/edit-profile',
            cache: false,
            data: formData,
            processData: false,
            contentType: false,
            success: function () {
                window.location.replace("http://"+window.location.host+"/profile-settings")
            },
            error: function (xhr, status, error) {
                console.log(JSON.parse(xhr.responseText))
            }
        })
    }
    const openColorsWin = (e) => {
        let colors_block = document.getElementById('create_room_colors_block')
        if (colors_block.classList.contains('hide')) {
            colors_block.classList.remove('hide')
        } else {
            colors_block.classList.add('hide')
        }
    }
    const selectColor = (e) => {
        let color = e.target.getAttribute('data-colorname')
        let colors_block = document.getElementById('create_room_colors_block')
        setProfileColor(color)
        let selected_color_block = document.getElementById('selected_color')
        selected_color_block.className = 'selected-design'
        selected_color_block.classList.add(color)
        colors_block.classList.add('hide')
    }
    return (
        <form className="settings-form" onSubmit={sendForm}>
            <CSRFToken/>
            <div className="inputWrapper">
                <label><span>Имя</span></label>
                <input placeholder="Введите здесь" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
            </div>
            <div className="inputWrapper">
                        <label><span>Цвет</span></label>
                        <div className="inputBlock">
                            <div className="design-select">
                                <div className={profileColor+" selected-design"} id="selected_color"> = ^ᴗ^ =</div>
                                <div className="select-design-btn">
                                    <span onClick={openColorsWin}>Выбрать цвет</span>
                                    <div id="create_room_colors_block" className="color-select-win hide">
                                        <ColorsBlock selectColor={selectColor} />
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="color" value={profileColor}/>
                        </div>
                    </div>
            <div className="inputWrapper">
                <label><span>Аватар</span></label>
                <div className="inputBlock">
                    <div className="avatar-prev">
                        <img
                            src={profile_data.avatar}
                            className="avatar" id="avatar_img" />
                    </div>
                    <Dropzone field="avatar" />
                </div>
            </div>
            <div className="inputWrapper">
                <label><span>Обложка</span></label>
                <div className="inputBlock">
                    <div className="avatar-prev">
                        <img
                            src={profile_data.cover}
                            className="settings-cover" id="cover_img" />
                    </div>
                    <Dropzone field="cover" />
                </div>
            </div>
            <div className="settings-line"></div>
            <h3>Информация</h3>
            <div className="inputWrapper">
                <label><span>Почта</span></label>
                <input placeholder="Введите здесь" name="email" onChange={formik.handleChange} value={formik.values.email} />
            </div>
            <div className="inputWrapper">
                <label><span>Сайт</span></label>
                <input placeholder="Введите здесь" name="webcite" onChange={formik.handleChange} value={formik.values.webcite} />
            </div>
            <div className="inputWrapper">
                <label><span>Город</span></label>
                <input placeholder="Введите здесь" name="city" onChange={formik.handleChange} value={formik.values.city} />
            </div>
            <div className="settings-line"></div>
            <h3>Оформление поста профиля</h3>
            <div className="inputWrapper">
                <label><span>Заголовок</span></label>
                <input placeholder="Введите здесь" name="post_title" onChange={formik.handleChange} value={formik.values.post_title} />
            </div>
            <div className="inputWrapper">
                <label><span>Текст</span></label>
                <textarea name="post_text" onChange={formik.handleChange} value={formik.values.post_text}></textarea>
            </div>
            <div className="inputWrapper">
                <label><span>Картинка</span></label>
                <div className="inputBlock">
                    <div className="avatar-prev">
                        <img
                            src={profile_data.post_image}
                            className="settings-post-img" id="post_image" />
                    </div>
                    <Dropzone field="post_image" />
                </div>
            </div>
            <footer>
                <button type="submit" className="send-btn">Сохранить</button>
            </footer>
        </form>
    )
}

export default ProfileSettingsForm