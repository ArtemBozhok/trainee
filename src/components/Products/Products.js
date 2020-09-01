import React from "react";
import style from './Products.module.css'
import ProductItem from "./Product-item/Product-item";

const Products = (props) => {
    let products = props.state.products;
    let productsItems = products.map(product => {
        return <ProductItem
            delete={props.state.deleteProduct}
            update={props.state.updateInfo}
            edit={props.state.editProduct}
            isValid={product.isValid}
            validationMessage={product.validationMessage}
            isEditable={product.isEditable}
            id={product.id}
            img={product.img}
            name={product.name}
            price={product.price}
            description={product.description} />
    });

    return (
        <div className={style.products}>
            <div className="container">
                <h2>All Hot dogs</h2>
                <div className={style.wrapper}>
                    {productsItems}
                </div>
            </div>
        </div>
    )
}

export default Products;