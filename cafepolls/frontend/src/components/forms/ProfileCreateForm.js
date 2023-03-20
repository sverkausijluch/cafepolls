import React from 'react'
import CSRFToken from '../csrftoken'
import { useFormik } from 'formik'
import Dropzone from '../elements/Dropzone'
import * as Yup from 'yup'

const ProfileCreateForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            city: '',
            email: '',
            avatar: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(30, 'Слишком длинное имя'),
            city: Yup.string()
                .max(30, 'Слишком длинное имя города'),
            email: Yup.string()
                .max(30, 'Слишком длинная почта'),
        }),
    })
    const isEmpty = (e) => {
        if (document.querySelector('#error_block').innerText === '') {
            document.querySelector('#error_block').classList.add('hide')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        $.ajax({
            type: 'post',
            url: '/api/create-profile',
            data: formData,
            processData: false,
            contentType: false,
            success: function () {
                localStorage.setItem('access_to_profile', 'done')
                window.location.replace("../")
            },
            error: function (xhr, status, error) {
                document.querySelector('#error_block').classList.remove('hide')
                console.log(JSON.parse(xhr.responseText))
            }
        })
    }
    return (
        <form className="settings-form" onSubmit={handleSubmit} onKeyUp={isEmpty}>
            <h3>Создание профиля</h3>
            <p>
                Отлично! Давайте познакомимся
            </p>
            <div className="error-block hide" id="error_block">
                <p>Обратите, пожалуйста, внимание -></p>
                <p>{formik.errors.name ? <span>{formik.errors.name}</span> : null}</p>
                <p>{formik.errors.email ? <span>{formik.errors.email}</span> : null}</p>
                <p>{formik.errors.city ? <span>{formik.errors.city}</span> : null}</p>
                <p>{formik.errors.avatar ? <span>{formik.errors.city}</span> : null}</p>
            </div>
            <CSRFToken/>
            <div className="inputWrapper">
                <label><span>Имя</span></label>
                <div className="inputBlock">
                    <input name="name" placeholder=" = ^ᴗ^ = " onChange={formik.handleChange}
                           value={formik.values.name}/>
                </div>
            </div>
            <div className="inputWrapper">
                <label><span>Город</span></label>
                <div className="inputBlock">
                    <input type="city" name="city" onChange={formik.handleChange} value={formik.values.city}
                           placeholder=" = ^ᴗ^ = "/>
                </div>
            </div>
            <div className="inputWrapper">
                <label><span>Почта для связи</span></label>
                <div className="inputBlock">
                    <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email}
                           placeholder=" = ^ᴗ^ = "/>
                </div>
            </div>
            <div className="inputWrapper">
                <label><span>Аватар</span></label>
                <div className="inputBlock">
                    <div className="avatars-prev">
                        <img
                            src="https://sun9-22.userapi.com/impg/DJJEBDte00biquLRwzD8fTWpkDxieAiJfaBvPw/Jp16f07VQ-4.jpg?size=1280x720&quality=95&sign=09e61f60e6fc70b0bd7624b9d9969094&type=album"
                            className="big-avatar avatar"/>
                        <img
                            src="https://sun9-22.userapi.com/impg/DJJEBDte00biquLRwzD8fTWpkDxieAiJfaBvPw/Jp16f07VQ-4.jpg?size=1280x720&quality=95&sign=09e61f60e6fc70b0bd7624b9d9969094&type=album"
                            className="middle-avatar"/>
                    </div>
                    <Dropzone field="avatar" class="file-input"/>
                </div>
            </div>
            <button className="send-btn">Вперёд</button>
        </form>
    );
}

export default ProfileCreateForm;