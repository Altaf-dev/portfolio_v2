import React, { useState } from "react";
import Age from "./Age";
import Popup from "../popup/Popup";
import About from "../about/About";
import MainBg from "./MainBg";

const Main = () =>{
    const [popupActive, setPopupActive] = useState(false)

    return (
        <>
            <section className="main">
                <div className="container main__wrapper">
                    <div className="main__description">
                        <h1 className="main__description-title">HTML верстальщик</h1>
                        <div className="main__description-subtitle">
                            <p className="main__description-text">Альтаф Каюмов</p>
                            <Age/>
                        </div>
                        <button onClick={() => {
                            setPopupActive(true)
                        }} className="main__btn">Отправить сообщение в Телеграм</button>
                    </div>
                    <div className="main__img-wrapper">
                        <MainBg/>
                    </div>
                </div>
                { popupActive && <Popup popupClose={setPopupActive}/> }
            </section>

            <About/>

        </>
    )
}

export default Main