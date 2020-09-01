import React from "react";
import style from './Header.module.css'
import Button from "../Button/Button";

const Header = (props) => {
    let showModal = () => {
        props.modal();
    }
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.logo}>
                        <img src="https://www.shareicon.net/data/256x256/2016/07/04/791029_food_512x512.png"
                             alt="Logo"/>
                        <h1>Hot-dog</h1>
                    </div>
                    <Button onclick={showModal} text="Add Hot-dog"/>
                </div>
            </div>
        </header>
    )
}

export default Header;