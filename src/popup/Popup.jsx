import React, { useState } from "react";
import axios from "axios";

const Popup = ({ popupClose }) => {

    const [input, setInput] = useState(false)
    const TOKEN = "6191998135:AAEa8K_M2ljGUoHGc8UHI4E92wa-26Wi9VU"
    const CHAT_ID = "-1001582860854"
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
    function success() {
        document.querySelector(".toast-success").classList.add('active')
        setTimeout(() => {
            document.querySelector(".toast-success").classList.remove('active')
        }, 2000)
    }
    function warning() {
        document.querySelector(".toast-warning").classList.add('active')
        setTimeout(() => {
            document.querySelector(".toast-warning").classList.remove('active')
        }, 3000)
    }
    function error() {
        document.querySelector(".toast-error").classList.add('active')
        setTimeout(() => {
            document.querySelector(".toast-error").classList.remove('active')
        }, 2000)
    }
    const checkInput = (e) => {

        let element = e.target

        if (e.target.value === '') {
            element.classList.add('error')
            warning()
            setInput(false)
        } else {
            element.classList.remove('error')
            setInput(true)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        let message = `<b>Сообщение с сайта</b>\n`
        message += `<b>Имя:</b> ${event.target.name.value}\n`
        message += `<b>Email отправителя:</b> ${event.target.email.value}\n`
        message += `<b>Сообщение:</b> ${event.target.message.value}`


        if (input === true) {
            axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: "html",
                text: message,

            })
                .then((res) => {
                    event.target.name.value = ""
                    event.target.email.value = ""
                    event.target.message.value = ""
                    success()
                    setTimeout(() => {
                        popupClose(false)
                    }, 2000)
                })
                .catch((err) => {
                    console.warn(err)
                    error()
                })
                .finally(() => {
                    setInput(false)
                })

        } if (input === false) {
            warning()
        } else {
            setInput(true)
        }
    }

    return (
        <div className="contact">
            <div className="contact__bg" onClick={() => popupClose(false)}></div>
            <div className="contact__wrapper">
                <button onClick={() => popupClose(false)} className="close-btn"></button>
                <form onSubmit={handleSubmit} className={"contact__form"} acceptCharset={"utf-8"} encType={"multipart/form-data"}>
                    <input
                        onChange={(e) => checkInput(e)}
                        name={"name"}
                        className={"contact__form-input"}
                        type={"text"}
                        placeholder={"Ваше имя"}/>
                    <input
                        onChange={(e) => checkInput(e)}
                        name={"email"}
                        className={"contact__form-input"}
                        type={"text"}
                        placeholder={"Ваш Email"}/>
                    <textarea
                        name={"message"}
                        className={"contact__form-message"}
                        placeholder={"Сообщение"}/>
                    <button
                        type={"submit"}
                        className={"contact__form-submit"}>Отправить</button>
                </form>
            </div>
            <div className={"toast-success"}>
                <span className={"toast-icon"}></span>
                <span>Сообщение отправлено</span>
            </div>
            <div className={"toast-error"}>
                <span className={"toast-icon"}></span>
                <span>Сообщение не отправлено</span>
            </div>
            <div className={"toast-warning"}>
                <span className={"toast-icon"}></span>
                <span>Не заполнено поле</span>
            </div>
        </div>
    )

}
export default Popup
