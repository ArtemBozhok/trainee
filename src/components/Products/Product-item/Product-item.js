import React from "react";
import style from './Product-item.module.css'
import Button from "../../Button/Button";
import Tooltip from "../../Tooltip/Tooltip";

const ProductItem = (props) => {
    let inputs = {
        img: React.createRef(),
        name: React.createRef(),
        price: React.createRef(),
        description: React.createRef(),
    }

    let edit = () => {
        let id = props.id;
        props.edit(id);
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
        props.update(inputName, value, props.id);
    }

    let deleteProduct = () => {
        let id = props.id;
        props.delete(id);
    }

    if (!props.isEditable) {
        return (
            <article className={style.item}>
                <div className={style.preview}>
                    <img src={props.img} alt={`Hot Dog ${props.name}`}/>
                </div>
                <h3>{props.name}</h3>
                <span>{props.price} $</span>
                <div className={style.description} dangerouslySetInnerHTML={{__html: props.description}} />
                <Button onclick={edit} text="Edit"/>
            </article>
        )
    } else {
    return (
        <article className={style.item}>
            <div className={style.preview}>
                <img src={props.img} alt="hot-dog"/>
            </div>
            <input placeholder="Image URL" onChange={change} ref={inputs.img} value={props.img} />
            <div className={style.group}>
                <input placeholder="Name" className={!props.isValid ? style.invalid : ''} onChange={change} ref={inputs.name} value={props.name}/>
                {!props.isValid ? <Tooltip text={props.validationMessage} /> : ''}
            </div>
            <input placeholder="Price" onChange={change} ref={inputs.price} value={props.price} />
            <textarea placeholder="Description" onChange={change} ref={inputs.description} value={props.description} className={style.description} />
            <Button onclick={edit} text="Update"/>
            <Button onclick={deleteProduct} text="Delete"/>
        </article>
    )
    }

}

export default ProductItem;