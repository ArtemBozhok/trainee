import React from "react";
import style from './Button.module.css'

const Button = (props) => {
    let onClickHandler = () => {
        props.onclick();
    }
    return (
        <button onClick={onClickHandler} className={style.btn}>{props.text}</button>
    )
}

export default Button;