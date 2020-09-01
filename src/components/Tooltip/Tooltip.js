import React from "react";
import style from './Tooltip.module.css'

const Tooltip = (props) => {
    return (
        <div className={style.tooltip}>{props.text}</div>
    )
}

export default Tooltip;