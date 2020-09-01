import React from "react";
import style from './Modal.module.css';
import Button from "../Button/Button";
import Tooltip from "../Tooltip/Tooltip";

const Modal = (props) => {
    let closeModal = () => {
        props.modal();
    }
    let inputs = {
        img: React.createRef(),
        name: React.createRef(),
        price: React.createRef(),
        description: React.createRef(),
    }
    let change = () => {
        let focusedInput = document.activeElement;
        let inputName;
        let value;

        for (let input in inputs) {
            if (inputs[input].current === focusedInput) {
                inputName = input;
                value = inputs[input].current.value;
            }
        }
        props.addProduct(inputName, value);
    }
    let addProduct = () => {
        console.log(props.inputs.isValid)
        props.pushProduct();
    }
    return (
        <div className={style.modalWrapper}>
            <div className={style.modal}>
                <h3>Add new Hot-Dog</h3>
                <div className={style.group}>
                    <input className={!props.inputs.isValid ? style.invalid : ''} onChange={change} ref={inputs.name}
                           value={props.inputs.name} placeholder="Name"/>
                    {!props.inputs.isValid ? <Tooltip text={props.inputs.validationMessage} /> : ''}
                </div>
                <input onChange={change} value={props.inputs.price} ref={inputs.price} placeholder="Price"/>
                <input onChange={change} value={props.inputs.description} ref={inputs.description}
                       placeholder="Description"/>
                <input onChange={change} value={props.inputs.img} ref={inputs.img} placeholder="Image URL"/>
                <div className={style.wrapper}>
                    <Button onclick={addProduct} text="Add"/>
                    <Button onclick={closeModal} text="Cancel"/>
                </div>
            </div>
        </div>
    )
}

export default Modal;