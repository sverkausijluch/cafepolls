import React from 'react'
import CSRFToken from '../csrftoken'

const UserSettingsForm = (props) => {
    return (
        <form className="settings-form">
            <ul className="links">
                <li><a>Помощь</a></li>
                 <li><a>Информация о сообществе</a></li>
            </ul>
            <CSRFToken/>
            <div className="inputWrapper">
                <label><span>Почта</span></label>
                <input placeholder="Введите здесь" />
            </div>
            <div className="inputWrapper">
                <label><span>Пароль</span></label>
                <div className="inputBlock">
                    *** <span className="text-btn">изменить</span>
                </div>
            </div>
            <footer>
                <div className="send-btn">Сохранить</div>
            </footer>
        </form>
    )
}

export default UserSettingsForm