import React, {useEffect} from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import CSRFToken from '../csrftoken';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
        const formik = useFormik({
                 initialValues: {
                   username: '',
                   password: '',
                   email: '',
                 },
                 validationSchema: Yup.object({
                   username: Yup.string()
                     .required('Заполните поле логин'),
                   password: Yup.string()
                     .required('Заполните поле пароль'),
                   email: Yup.string().email('Адрес должен выглядеть следующим образом: mao@gmao.com').required('Заполните поле e-mail'),
                 }),
               })
            const isEmpty = (e) => {
                if(document.querySelector('#error_block').innerText === '') {
                    document.querySelector('#error_block').classList.add('hide')
                }
            }
           const handleSubmit = (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget)
                    $.ajax({
                        type: 'post',
                        url: '../api/create-user',
                        cache: false,
                        data: formData,
                        processData: false,
                        contentType: false,
                        success: function() {
			                localStorage.setItem('access_to_register', 'done')
			                localStorage.setItem('access_to_profile_create', 'true')
                             window.location.replace("http://"+window.location.host+"/profile-create")
                        },
                        error: function(xhr, status, error){
                            document.querySelectorAll('.exist-p').forEach(el=>el.remove())
                            for(const [key, value] of Object.entries(JSON.parse(xhr.responseText))){
                                    if(value[0] == 'A user with that username already exists.') {
                                        let p = document.createElement('p')
                                        p.classList.add('exist-p')
                                        let span = document.createElement('span')
                                        span.append('Этот логин уже используется')
                                        p.appendChild(span)
                                        if (!document.querySelector('#error_block').contains(p)) {
                                            document.querySelector('#error_block').appendChild(p)
                                        }
                                    }
                                    if(value[0] == 'Указанная почта уже используется') {
                                        let p = document.createElement('p')
                                        p.classList.add('exist-p')
                                        let span = document.createElement('span')
                                        span.append(value[0])
                                        p.appendChild(span)
                                        if(!document.querySelector('#error_block').contains(p)) {
                                            document.querySelector('#error_block').appendChild(p)
                                        }
                                    }
                            }
                           document.querySelector('#error_block').classList.remove('hide')
                        }
                    })
           }
        return (
                <form className="settings-form" onSubmit={handleSubmit} onKeyUp={isEmpty}>
                    <div className="error-block hide" id="error_block">
                        <p>Обратите, пожалуйста, внимание -></p>
                        <p>{formik.errors.email ? <span>{formik.errors.email}</span> : null}</p>
                        <p>{formik.errors.password ? <span>{formik.errors.password}</span> : null}</p>
                        <p>{formik.errors.username ? <span>{formik.errors.username}</span> : null}</p>
                    </div>
                    <CSRFToken />
                    <div className="inputWrapper">
						  <label><span>Логин</span></label>
						  <div className="inputBlock">
							  <input name="username" placeholder=" = ^ᴗ^ = " onChange={formik.handleChange} value={formik.values.username} />
						  </div>

                    </div>
                    <div className="inputWrapper">
						  <label><span>Пароль</span></label>
						  <div className="inputBlock">
							  <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} autoComplete="new-password" placeholder="(＃＞＜)" />
						  </div>

                    </div>
                    <div className="inputWrapper">
						  <label><span>E-mail</span></label>
						  <div className="inputBlock">
							  <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} placeholder=" = ^ᴗ^ = " />
						  </div>

                    </div>
                    <button className="send-btn">Далее</button>
                </form>
        );
}

export default RegisterForm;